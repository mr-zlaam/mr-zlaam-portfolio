import { useContext } from "react";
import "./Parents.scss";
import { Context } from "../01_Context/Context";
import { Header, Routers } from "../05_Exporter.js";
const Parents = () => {
  const { isDarkMode, isErrorPage } = useContext(Context);

  return (
    <>
      <div>
        <div
          className={`${
            isDarkMode
              ? "child_container_dark white_color"
              : "child_container_light  black_color"
          }`}
        >
          {isErrorPage ? null : <Header />} <Routers />
        </div>
      </div>
    </>
  );
};

export default Parents;
