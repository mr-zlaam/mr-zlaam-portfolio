import "./Header.scss";
import { Link } from "react-router-dom";
import HeaderLinks from "../02_HeaderLinks/HeaderLinks";
import Theme from "../../03_Theme/Theme_toggler";
import MenuBar from "../../../04_Variables_And_StyleComponents/MenuBar/MenuBar";
import { useContext, useEffect } from "react";
import { Context } from "../../../01_Context/Context";
const Header = () => {
  const { setIsErrorPage } = useContext(Context);

  useEffect(() => {
    setIsErrorPage(false);
  }, [Header]);
  return (
    <>
      <header className={`nav_container`}>
        <Link to={"/"} className="logo">
          <img src="/logo/zlaam.png" alt="logo" />
        </Link>
        <HeaderLinks />
        <div className={`menu_bar`}>
          <MenuBar />
        </div>
        <div className="theme_toggler">
          <Theme />
        </div>
      </header>
    </>
  );
};

export default Header;
