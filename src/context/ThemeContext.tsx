import { createContext, useContext, useState, ReactNode } from 'react';

export enum Theme {
  Light = 'Light',
  Dark = 'Dark',
}

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type ContextProviderPropsType = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = (props: ContextProviderPropsType): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(Theme.Light);
  const { children } = props;

  const toggleTheme = (): void => {
    setTheme((prevTheme) =>
      prevTheme === Theme.Light ? Theme.Dark : Theme.Light
    );
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      <div className={`base theme${value.theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
