import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

// Create a context
const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

type ThemeContextProps = {
  children: React.ReactNode;
};

// Create a provider component
export const ThemeProvider = ({ children }: Readonly<ThemeContextProps>) => {
  const localTheme = window.localStorage.getItem("theme");
  const [theme, setTheme] = useState(localTheme ?? "dark");

  const contextValue = useMemo(() => {
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return { theme, toggleTheme };
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Provide the theme and toggleTheme function to children
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook that uses the context
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
