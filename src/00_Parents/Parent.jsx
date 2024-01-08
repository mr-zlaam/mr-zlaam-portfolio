import { useContext } from "react";
import Routers from "../02_Components/02_Routers/01_Routers";
import Header from "../02_Components/01_NavBar/01_Header/Header";
import "./Parents.scss";
import { Context } from "../01_Context/Context";
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
