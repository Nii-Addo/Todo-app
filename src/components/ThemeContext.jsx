import React, { useState } from "react";

const ThemeContext = React.createContext();
const { Provider } = ThemeContext;

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "light" ? "#333" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return <Provider value={{ theme, toggleTheme }}>{children}</Provider>;
};

export { ThemeContext, ThemeProvider };
