'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type ThemePref = 'system' | 'dark' | 'light';
type Resolved = 'dark' | 'light';

interface ThemeContextValue {
  /** Preference: system | dark | light. */
  theme: ThemePref;
  /** Resolved appearance right now. */
  resolved: Resolved;
  /** Set the preference directly. */
  setTheme: (pref: ThemePref) => void;
  /** Cycle System → Light → Dark → System. */
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function systemResolved(): Resolved {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const NEXT: Record<ThemePref, ThemePref> = { system: 'light', light: 'dark', dark: 'system' };

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Default 'system'; a saved 'dark'/'light' is respected as a pin. Media
  // styles off a data-theme attribute (not a class), so resolution writes
  // that attribute.
  const [theme, setThemeState] = useState<ThemePref>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('ssm-theme') as ThemePref | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing with localStorage, an external store
    if (saved === 'dark' || saved === 'light' || saved === 'system') setThemeState(saved);
    setMounted(true);
  }, []);

  // Apply resolved data-theme + persist the preference.
  useEffect(() => {
    if (!mounted) return;
    const r: Resolved = theme === 'system' ? systemResolved() : theme;
    document.documentElement.setAttribute('data-theme', r);
    localStorage.setItem('ssm-theme', theme);
  }, [theme, mounted]);

  // Live OS day/night follow while preference is 'system'.
  useEffect(() => {
    if (!mounted) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if (theme !== 'system') return;
      document.documentElement.setAttribute('data-theme', systemResolved());
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme, mounted]);

  const setTheme = (pref: ThemePref) => setThemeState(pref);
  const toggle = () => setThemeState((t) => NEXT[t]);
  const resolved: Resolved =
    !mounted || typeof window === 'undefined' ? 'dark' : theme === 'system' ? systemResolved() : theme;

  return (
    <ThemeContext.Provider value={{ theme, resolved, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}
