import { useState } from "react";
import { Context } from "./Context";

export const ContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectedData, setIsSelectedData] = useState(null);
  const [isErrorPage, setIsErrorPage] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  return (
    <Context.Provider
      value={{
        isOnline,
        setIsOnline,
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
