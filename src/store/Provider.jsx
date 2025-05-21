import { auth } from "@/config/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkMode, setIsDarkMode] = useState(defaultDark);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser?.providerData?.[0]);

      setIsLoading(false);
    });

    return () => unSubscribe();
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <Context value={{ toggleDarkMode, isDarkMode, user, isLoading }}>
      {children}
    </Context>
  );
};

export const useStore = () => {
  return useContext(Context);
};

export default Provider;
