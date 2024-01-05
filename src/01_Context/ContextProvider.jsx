import { useState } from "react";
import { Context } from "./Context";

export const ContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectedData, setIsSelectedData] = useState(null);
  return (
    <Context.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        setIsMenuOpen,
        isMenuOpen,
        isModalOpen,
        setIsModalOpen,
        isSelectedData,
        setIsSelectedData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
