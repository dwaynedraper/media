// @vitest-environment jsdom

/**
 * Functional tests for the custom gallery carousel.
 *
 * These drive the REAL component through its real interactions: keyboard
 * arrows, wrap-around at both ends, click-zone navigation (left third
 * back / rest forward), Escape/X close, touch swipes (threshold + axis
 * rules), neighbor prefetch, scroll-lock, and the single-photo /
 * empty-photo edge cases.
 */

import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import GalleryModal from './GalleryModal';
import type { GalleryPhoto } from '@/data/photos';

const ph = (ids: string[]): GalleryPhoto[] =>
  ids.map((id, i) => ({ publicId: id, alt: `Test photo ${i + 1}` }));

const THREE = ph(['p/01', 'p/02', 'p/03']);

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  document.body.style.overflow = '';
});

function currentImg(): HTMLImageElement {
  return screen.getByAltText(/Test photo/i) as HTMLImageElement;
}

function stage(container: HTMLElement): Element {
  return container.querySelector('.modal-image-wrap')!;
}

describe('GalleryModal — navigation', () => {
  it('starts on startIndex and shows the counter', () => {
    render(<GalleryModal photos={THREE} startIndex={1} onClose={() => {}} />);
    expect(currentImg().src).toContain('p/02');
    expect(screen.getByLabelText('Photo 2 of 3')).toBeTruthy();
  });

  it('ArrowRight advances; wraps past the end back to the first', () => {
    render(<GalleryModal photos={THREE} startIndex={0} onClose={() => {}} />);
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(currentImg().src).toContain('p/02');
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(currentImg().src).toContain('p/01'); // wrapped
  });

  it('ArrowLeft from the first photo wraps to the last', () => {
    render(<GalleryModal photos={THREE} startIndex={0} onClose={() => {}} />);
    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    expect(currentImg().src).toContain('p/03');
  });

  it('prev/next buttons navigate', () => {
    render(<GalleryModal photos={THREE} startIndex={0} onClose={() => {}} />);
    fireEvent.click(screen.getByLabelText('Next photo'));
    expect(currentImg().src).toContain('p/02');
    fireEvent.click(screen.getByLabelText('Previous photo'));
    expect(currentImg().src).toContain('p/01');
  });

  it('out-of-range startIndex is clamped, not broken', () => {
    render(<GalleryModal photos={THREE} startIndex={99} onClose={() => {}} />);
    expect(currentImg().src).toContain('p/03'); // clamped to last
  });
});

describe('GalleryModal — click zones', () => {
  // jsdom viewport is 1024 wide → boundary at ~341px.

  it('clicking the right two-thirds of the stage advances', () => {
    const { container } = render(
      <GalleryModal photos={THREE} startIndex={0} onClose={() => {}} />,
    );
    fireEvent.click(stage(container), { clientX: 900 });
    expect(currentImg().src).toContain('p/02');
    fireEvent.click(stage(container), { clientX: 400 }); // just right of the boundary
    expect(currentImg().src).toContain('p/03');
  });

  it('clicking the left third goes back (and wraps)', () => {
    const { container } = render(
      <GalleryModal photos={THREE} startIndex={0} onClose={() => {}} />,
    );
    fireEvent.click(stage(container), { clientX: 100 });
    expect(currentImg().src).toContain('p/03'); // wrapped backwards
  });

  it('stage clicks never close the modal', () => {
    const onClose = vi.fn();
    const { container } = render(
      <GalleryModal photos={THREE} startIndex={0} onClose={onClose} />,
    );
    fireEvent.click(stage(container), { clientX: 900 });
    fireEvent.click(stage(container), { clientX: 100 });
    fireEvent.click(currentImg(), { clientX: 900 }); // clicks on the photo bubble to the stage
    expect(onClose).not.toHaveBeenCalled();
  });
});

describe('GalleryModal — prefetch', () => {
  it('prefetches one back and two ahead of the current photo', () => {
    const fetched: string[] = [];
    vi.stubGlobal(
      'Image',
      class {
        set src(v: string) { fetched.push(v); }
      },
    );
    render(<GalleryModal photos={ph(['p/01', 'p/02', 'p/03', 'p/04', 'p/05'])} startIndex={0} onClose={() => {}} />);
    expect(fetched.some(u => u.includes('p/02'))).toBe(true); // +1
    expect(fetched.some(u => u.includes('p/03'))).toBe(true); // +2
    expect(fetched.some(u => u.includes('p/05'))).toBe(true); // -1 (wraps)
    expect(fetched.some(u => u.includes('p/04'))).toBe(false);
  });
});

describe('GalleryModal — closing', () => {
  it('Escape closes', () => {
    const onClose = vi.fn();
    render(<GalleryModal photos={THREE} startIndex={0} onClose={onClose} />);
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('close button closes and holds initial focus', () => {
    const onClose = vi.fn();
    render(<GalleryModal photos={THREE} startIndex={0} onClose={onClose} />);
    const btn = screen.getByLabelText('Close gallery');
    expect(document.activeElement).toBe(btn);
    fireEvent.click(btn);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('locks body scroll while open, restores on unmount', () => {
    const { unmount } = render(
      <GalleryModal photos={THREE} startIndex={0} onClose={() => {}} />,
    );
    expect(document.body.style.overflow).toBe('hidden');
    unmount();
    expect(document.body.style.overflow).toBe('');
  });
});

describe('GalleryModal — touch swipe', () => {
  function swipe(el: Element, fromX: number, toX: number, fromY = 200, toY = 200) {
    fireEvent.touchStart(el, { touches: [{ clientX: fromX, clientY: fromY }] });
    fireEvent.touchEnd(el, { changedTouches: [{ clientX: toX, clientY: toY }] });
  }

  it('swipe left (>50px) goes next; swipe right goes prev', () => {
    const { container } = render(
      <GalleryModal photos={THREE} startIndex={0} onClose={() => {}} />,
    );
    const root = container.querySelector('.gallery-modal')!;
    swipe(root, 300, 200); // left
    expect(currentImg().src).toContain('p/02');
    swipe(root, 200, 300); // right
    expect(currentImg().src).toContain('p/01');
  });

  it('a sub-threshold swipe (≤50px) does nothing', () => {
    const { container } = render(
      <GalleryModal photos={THREE} startIndex={0} onClose={() => {}} />,
    );
    swipe(container.querySelector('.gallery-modal')!, 300, 260);
    expect(currentImg().src).toContain('p/01');
  });

  it('a mostly-vertical drag does not navigate', () => {
    const { container } = render(
      <GalleryModal photos={THREE} startIndex={0} onClose={() => {}} />,
    );
    swipe(container.querySelector('.gallery-modal')!, 300, 200, 100, 400);
    expect(currentImg().src).toContain('p/01');
  });
});

describe('GalleryModal — image sizing', () => {
  it('serves a viewport-sized image, not blanket 4K', () => {
    render(<GalleryModal photos={THREE} startIndex={0} onClose={() => {}} />);
    // jsdom: 1024x768 @1x → bucketed to 1280x960
    expect(currentImg().src).toContain('c_limit,w_1280,h_960');
  });
});

describe('GalleryModal — edge cases', () => {
  it('single photo: no arrows, no counter; arrows and stage clicks are harmless', () => {
    const { container } = render(
      <GalleryModal photos={ph(['p/solo'])} startIndex={0} onClose={() => {}} />,
    );
    expect(screen.queryByLabelText('Next photo')).toBeNull();
    expect(screen.queryByLabelText('Previous photo')).toBeNull();
    expect(screen.queryByText(/1.*\/.*1/)).toBeNull();
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    fireEvent.click(stage(container), { clientX: 900 });
    expect(currentImg().src).toContain('p/solo');
  });

  it('empty photos: renders nothing at all', () => {
    const { container } = render(
      <GalleryModal photos={ph([])} startIndex={0} onClose={() => {}} />,
    );
    expect(container.firstChild).toBeNull();
  });
});
