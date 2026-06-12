#!/usr/bin/env node
/**
 * One-shot Cloudinary upload for the real-estate gallery wall.
 *
 * Usage:
 *   node scripts/upload-gallery.mjs
 *   node scripts/upload-gallery.mjs "/path/to/staged/folder"
 *
 * Reads credentials from media/.env.local (never printed).
 * Uploads every .jpg in the staging folder to sharpsighted/real-estate/<name>,
 * attaching alt/caption context from context.json in the same folder.
 * Signed uploads with an explicit public_id overwrite on re-run, so this
 * script is safe to run again if anything fails partway.
 *
 * Requires Node 18+ (built-in fetch/FormData/Blob). No npm dependencies.
 */

import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const DEFAULT_STAGING =
  '/Volumes/Portfolio/Portfolio - RE & Arch/Claude Selections/upload-ready';
const DEFAULT_FOLDER = 'sharpsighted/real-estate';

// ---- env ------------------------------------------------------------------
const envPath = join(__dirname, '..', '.env.local');
const env = {};
for (const line of readFileSync(envPath, 'utf8').split('\n')) {
  const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
}
const CLOUD = env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const KEY = env.CLOUDINARY_API_KEY;
const SECRET = env.CLOUDINARY_API_SECRET;
if (!CLOUD || !KEY || !SECRET) {
  console.error('Missing Cloudinary credentials in media/.env.local');
  process.exit(1);
}

// ---- staging --------------------------------------------------------------
const staging = process.argv[2] ?? DEFAULT_STAGING;
const files = readdirSync(staging).filter((f) => f.endsWith('.jpg')).sort();
if (files.length === 0) {
  console.error(`No .jpg files found in: ${staging}`);
  process.exit(1);
}
// context.json shapes:
//   new:    { "folder": "sharpsighted/home", "images": { "<name>": {alt, caption} } }
//   legacy: { "<name>": {alt, caption} }  → uploads to DEFAULT_FOLDER
let context = {};
let FOLDER = DEFAULT_FOLDER;
try {
  const parsed = JSON.parse(readFileSync(join(staging, 'context.json'), 'utf8'));
  if (parsed.folder && parsed.images) {
    FOLDER = parsed.folder;
    context = parsed.images;
  } else {
    context = parsed;
  }
} catch {
  console.warn('context.json not found — uploading without alt/caption metadata.');
}

const esc = (s) => s.replace(/([=|])/g, '\\$1');

// ---- upload ---------------------------------------------------------------
console.log(`Uploading ${files.length} photos to ${CLOUD}/${FOLDER} ...\n`);
let ok = 0;
const failed = [];

for (const file of files) {
  const name = basename(file, '.jpg');
  const publicId = `${FOLDER}/${name}`;
  const meta = context[name];
  const ctx = meta ? `alt=${esc(meta.alt)}|caption=${esc(meta.caption)}` : '';
  const timestamp = Math.floor(Date.now() / 1000);

  // Signature: alphabetically sorted params + secret, SHA-1 hex.
  // invalidate=true purges CDN-cached derived versions on overwrite —
  // without it, replacing an image keeps serving the old crop for days.
  const params = { invalidate: 'true', public_id: publicId, timestamp };
  if (ctx) params.context = ctx;
  const toSign = Object.keys(params)
    .sort()
    .map((k) => `${k}=${params[k]}`)
    .join('&');
  const signature = createHash('sha1').update(toSign + SECRET).digest('hex');

  const form = new FormData();
  form.append('file', new Blob([readFileSync(join(staging, file))]), file);
  form.append('api_key', KEY);
  form.append('timestamp', String(timestamp));
  form.append('public_id', publicId);
  form.append('invalidate', 'true');
  if (ctx) form.append('context', ctx);
  form.append('signature', signature);

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD}/image/upload`,
      { method: 'POST', body: form },
    );
    const json = await res.json();
    if (res.ok) {
      ok++;
      console.log(
        `  ✓ ${json.public_id}  (${json.width}x${json.height}, ${(json.bytes / 1e6).toFixed(1)} MB)`,
      );
    } else {
      failed.push(file);
      console.error(`  ✗ ${file}: ${json.error?.message ?? res.status}`);
    }
  } catch (err) {
    failed.push(file);
    console.error(`  ✗ ${file}: ${err.message}`);
  }
}

console.log(`\nDone. ${ok}/${files.length} uploaded.`);
if (failed.length) {
  console.error(`Failed: ${failed.join(', ')}\nRe-run this script to retry — successful uploads are simply overwritten.`);
  process.exit(1);
}
