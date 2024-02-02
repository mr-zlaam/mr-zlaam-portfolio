import {} from "react";
import "./ExpertieseLoader.scss";
const ExpertieseLoader = () => {
  const theme = localStorage.getItem("isDarkMode");
  let myThemeLoader = theme && theme === "true" ? "light_bg " : " dark_bg ";
  return (
    <>
      <div className="loading-wave">
        <div className={`loading-bar ${myThemeLoader}`}></div>
        <div className={`loading-bar ${myThemeLoader}`}></div>
        <div className={`loading-bar ${myThemeLoader}`}></div>
        <div className={`loading-bar ${myThemeLoader}`}></div>
      </div>
    </>
  );
};

export default ExpertieseLoader;
