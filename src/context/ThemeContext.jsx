import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
});

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
  } catch (e) {
    // LocalStorage might be disabled or restricted
  }
  return 'dark';
}

function applyThemeToDOM(theme) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;

  if (theme === 'dark') {
    root.classList.add('dark');
    root.classList.remove('light');
  } else {
    root.classList.add('light');
    root.classList.remove('dark');
  }

  root.setAttribute('data-theme', theme);
  root.style.colorScheme = theme;

  // Update meta theme-color tag
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', theme === 'dark' ? '#0B0F17' : '#F8FAFC');
  }
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (e) {
      // LocalStorage error handled
    }
    applyThemeToDOM(newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    // Apply current theme on mount
    applyThemeToDOM(theme);

    // Listen to system preference changes if user hasn't manually chosen a theme in localStorage
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e) => {
      try {
        const hasManualChoice = localStorage.getItem('theme');
        if (!hasManualChoice) {
          const sysTheme = e.matches ? 'dark' : 'light';
          setThemeState(sysTheme);
          applyThemeToDOM(sysTheme);
        }
      } catch (err) {}
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemChange);
      return () => mediaQuery.removeEventListener('change', handleSystemChange);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
