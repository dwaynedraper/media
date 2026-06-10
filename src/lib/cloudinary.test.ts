import { describe, expect, it } from 'vitest';
import { cloudinaryUrl } from './cloudinary';

describe('cloudinaryUrl', () => {
  it('thumb = 3:2 grid fill', () => {
    expect(cloudinaryUrl('sharpsighted/primrose/01-exterior-front', 'thumb')).toBe(
      'https://res.cloudinary.com/testcloud/image/upload/c_fill,g_auto,w_1800,h_1200,q_auto,f_auto/sharpsighted/primrose/01-exterior-front',
    );
  });

  it('fit = 4K-capped contain for the modal', () => {
    expect(cloudinaryUrl('a/b', 'fit')).toContain('c_limit,w_3840,h_2160');
  });

  it('raw = best-quality original for zoom', () => {
    expect(cloudinaryUrl('a/b', 'raw')).toContain('q_auto:best');
  });

  it('empty public id → empty string (no broken URL)', () => {
    expect(cloudinaryUrl('', 'thumb')).toBe('');
  });
});
