'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  // Cycles System → Light → Dark → System; glyph shows the current choice.
  const glyph = theme === 'system' ? '🖥' : theme === 'dark' ? '☀' : '☾';
  return (
    <button
      onClick={toggle}
      type="button"
      aria-label={`Theme: ${theme}. Tap to cycle System, Light, Dark.`}
      title={`Theme: ${theme}`}
      className="theme-toggle"
    >
      {glyph}
    </button>
  );
}
