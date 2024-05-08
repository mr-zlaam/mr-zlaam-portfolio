import { useState } from "react";
import { Context } from "./Context";

export const ContextProvider = ({ children }) => {
  // const [isDarkMode, setIsDarkMode] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectedData, setIsSelectedData] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Context.Provider
      value={{
        isImageLoaded,
        setIsImageLoaded,
        // isDarkMode,
        // setIsDarkMode,
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
