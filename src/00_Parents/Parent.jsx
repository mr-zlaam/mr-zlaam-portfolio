import { useContext } from "react";
import Routers from "../02_Components/02_Routers/01_Routers";
import Header from "../02_Components/01_NavBar/01_Header/Header";
import "./Parents.scss";
import { Context } from "../01_Context/Context";
const Parents = () => {
  const { isDarkMode } = useContext(Context);
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
          <Header />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
          <Routers />
        </div>
      </div>
    </>
  );
};

export default Parents;
