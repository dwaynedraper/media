// @vitest-environment jsdom

import { describe, expect, it } from 'vitest';
import { cloudinaryUrl, modalUrl } from './cloudinary';

describe('cloudinaryUrl', () => {
  it('thumb = 3:2 grid fill', () => {
    expect(cloudinaryUrl('sharpsighted/real-estate/01-inverness-twilight-front', 'thumb')).toBe(
      'https://res.cloudinary.com/testcloud/image/upload/c_fill,g_auto,w_1800,h_1200,q_auto,f_auto/sharpsighted/real-estate/01-inverness-twilight-front',
    );
  });

  it('fit = 4K-capped contain (SSR fallback)', () => {
    expect(cloudinaryUrl('a/b', 'fit')).toContain('c_limit,w_3840,h_2160');
  });

  it('empty public id → empty string (no broken URL)', () => {
    expect(cloudinaryUrl('', 'thumb')).toBe('');
  });
});

describe('modalUrl', () => {
  it('sizes to the viewport in 320px buckets (jsdom: 1024x768 @1x → 1280x960)', () => {
    expect(modalUrl('a/b')).toContain('c_limit,w_1280,h_960,q_auto,f_auto');
  });

  it('empty public id → empty string', () => {
    expect(modalUrl('')).toBe('');
  });
});
