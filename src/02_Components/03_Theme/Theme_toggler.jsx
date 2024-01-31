import { useContext, useEffect } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { Context } from "../../01_Context/Context";
import "./Theme.scss";
const Theme = () => {
  const { isDarkMode, setIsDarkMode } = useContext(Context);
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode");
    if (!storedDarkMode) {
      toggleThemeMode();
    }
    setIsDarkMode(storedDarkMode === "true");
  }, [setIsDarkMode]);

  const toggleThemeMode = () => {
    setIsDarkMode((prevmode) => {
      const newDarkMode = !prevmode;
      localStorage.setItem("isDarkMode", newDarkMode);
      return newDarkMode;
    });
  };

  return (
    <>
      {isDarkMode ? (
        <div className="toggler_icon" onClick={toggleThemeMode}>
          <BsSunFill className="icon_sun default " />
        </div>
      ) : (
        <div className="toggler_icon" onClick={toggleThemeMode}>
          <BsFillMoonFill className="icon_moon default " />
        </div>
      )}
    </>
  );
};

export default Theme;
