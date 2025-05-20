import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkMode, setIsDarkMode] = useState(defaultDark);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    toggleDarkMode();
  }, [isDarkMode]);

  return <Context value={{ isDarkMode, setIsDarkMode }}>{children}</Context>;
};

export const useStore = () => {
  return useContext(Context);
};

export default Provider;
