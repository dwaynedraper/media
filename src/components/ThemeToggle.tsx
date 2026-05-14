'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      type="button"
      aria-label="Toggle light and dark mode"
      className="theme-toggle"
    >
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  );
}
