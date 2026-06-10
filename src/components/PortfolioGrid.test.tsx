// @vitest-environment jsdom

/**
 * PortfolioGrid — the flat photo wall → carousel handoff, plus the
 * empty-wall guard. The data module is mocked so tests don't depend on
 * whatever is currently in src/data/photos.ts.
 */

import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

afterEach(() => {
  cleanup();
  vi.resetModules();
  vi.doUnmock('@/data/photos');
});

async function renderWithPhotos(photos: unknown[]) {
  vi.doMock('@/data/photos', () => ({ photos }));
  const { default: PortfolioGrid } = await import('./PortfolioGrid');
  return render(<PortfolioGrid />);
}

const WALL = [
  { publicId: 'p/01', alt: 'Twilight front exterior' },
  { publicId: 'p/02', alt: 'Great room' },
  { publicId: 'p/03', alt: 'Kitchen island' },
];

describe('PortfolioGrid', () => {
  it('shows the coming-soon line when there are no photos', async () => {
    await renderWithPhotos([]);
    expect(screen.getByText(/coming soon/i)).toBeTruthy();
  });

  it('renders one card per photo, named by its alt text', async () => {
    await renderWithPhotos(WALL);
    expect(screen.getAllByRole('button')).toHaveLength(WALL.length);
    expect(screen.getByRole('button', { name: 'Great room' })).toBeTruthy();
  });

  it('clicking a photo opens ONE carousel over the whole set, starting there', async () => {
    await renderWithPhotos(WALL);
    fireEvent.click(screen.getByRole('button', { name: 'Great room' }));

    const dialog = screen.getByRole('dialog', { name: /photo gallery/i });
    expect(dialog).toBeTruthy();
    // starts at the clicked photo…
    expect(screen.getByLabelText('Photo 2 of 3')).toBeTruthy();
    // …and the carousel spans the entire wall, not a sub-gallery
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(screen.getByLabelText('Photo 3 of 3')).toBeTruthy();
  });

  it('Escape closes the carousel and returns to the wall', async () => {
    await renderWithPhotos(WALL);
    fireEvent.click(screen.getByRole('button', { name: 'Twilight front exterior' }));
    expect(screen.getByRole('dialog')).toBeTruthy();
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(screen.getAllByRole('button')).toHaveLength(WALL.length);
  });
});
