// import { useContext } from "react";
import "./Header.scss";
// import { Context } from "../../../01_Context/Context";
import { Link } from "react-router-dom";
import HeaderLinks from "../02_HeaderLinks/HeaderLinks";
import Theme from "../../03_Theme/Theme_toggler";
import MenuBar from "../../../04_Variables_And_StyleComponents/MenuBar/MenuBar";
const Header = () => {
  // const { isMenuOpen, setIsMenuOpen } = useContext(Context);
  return (
    <>
      <header className={`nav_container `}>
        <Link className="logo">
          <img src="/logo/siraj.png" alt="logo" width={70} />
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
