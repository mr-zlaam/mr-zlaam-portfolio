import { useState } from "react";
import { Context } from "./Context";

export const ContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Context.Provider
      value={{ isDarkMode, setIsDarkMode, setIsMenuOpen, isMenuOpen }}
    >
      {children}
    </Context.Provider>
  );
};
