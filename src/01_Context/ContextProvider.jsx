import { useState } from "react";
import { Context } from "./Context";

export const ContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectedData, setIsSelectedData] = useState(null);
  const [isErrorPage, setIsErrorPage] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <Context.Provider
      value={{
        isImageLoaded,
        setIsImageLoaded,
        isDarkMode,
        setIsDarkMode,
        setIsMenuOpen,
        isMenuOpen,
        isModalOpen,
        setIsModalOpen,
        isSelectedData,
        setIsSelectedData,
        isErrorPage,
        setIsErrorPage,
      }}
    >
      {children}
    </Context.Provider>
  );
};
