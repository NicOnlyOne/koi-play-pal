import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'dark-wcag';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'light', setTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('hanafuda-theme') as Theme;
    return stored || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'dark-wcag');
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'dark-wcag') {
      root.classList.add('dark', 'dark-wcag');
    }
    localStorage.setItem('hanafuda-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
