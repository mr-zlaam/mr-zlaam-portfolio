import "./Header.scss";
import { Link } from "react-router-dom";
import HeaderLinks from "../02_HeaderLinks/HeaderLinks";
import Theme from "../../03_Theme/Theme_toggler";
import MenuBar from "../../../04_Variables_And_StyleComponents/MenuBar/MenuBar";
const Header = () => {
  return (
    <>
      <header className={`nav_container`}>
        <Link to={"/"} className="logo">
          <img src="/logo/siraj.png" alt="logo" width={75} />
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
