import { useState, useEffect, useCallback } from "react";

const useTheme = (initialDarkMode = true) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode !== null
      ? JSON.parse(storedDarkMode)
      : initialDarkMode;
  });

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return { isDarkMode, toggleTheme };
};

export default useTheme;
