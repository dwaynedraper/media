import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const htmlPath = resolve(process.argv[2] || '../../Downloads/files 2/sharpsighted-media-contact.html');
const html = readFileSync(htmlPath, 'utf8');

const match = html.match(/src="data:image\/(?:png|jpeg|jpg|webp);base64,([^"]+)"/);
if (match) {
  const ext = html.match(/src="data:image\/(png|jpeg|jpg|webp);base64,/)?.[1] ?? 'png';
  const outPath = resolve('public/images/hihello-qr.' + ext);
  writeFileSync(outPath, Buffer.from(match[1], 'base64'));
  console.log('QR image extracted to', outPath);
} else {
  console.error('No base64 image found in the HTML file.');
  process.exit(1);
}
