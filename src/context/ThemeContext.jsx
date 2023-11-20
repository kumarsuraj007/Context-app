import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const themes = {
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
  };

  const theme = isLightTheme ? themes.light : themes.dark;
  const toggleTheme = () => setIsLightTheme(!isLightTheme)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
