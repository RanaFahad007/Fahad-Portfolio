import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative w-11 h-11 rounded-btn flex items-center justify-center border border-theme-border bg-theme-surface text-theme-muted hover:text-theme-text hover:bg-theme-surface-hover hover:border-theme-muted transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-accent active:scale-95 ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      id="theme-toggle-btn"
    >
      {/* Sun Icon (shown in dark mode to switch to light) */}
      <Sun
        className={`w-[18px] h-[18px] stroke-[1.75] transition-all duration-300 absolute ${
          isDark
            ? 'rotate-0 scale-100 opacity-100 text-amber-400'
            : '-rotate-90 scale-0 opacity-0'
        }`}
      />
      {/* Moon Icon (shown in light mode to switch to dark) */}
      <Moon
        className={`w-[18px] h-[18px] stroke-[1.75] transition-all duration-300 absolute ${
          isDark
            ? 'rotate-90 scale-0 opacity-0'
            : 'rotate-0 scale-100 opacity-100 text-sky-600'
        }`}
      />
    </button>
  );
}
