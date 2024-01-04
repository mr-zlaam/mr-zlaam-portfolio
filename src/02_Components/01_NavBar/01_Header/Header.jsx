// import { useContext } from "react";
import "./Header.scss";
// import { Context } from "../../../01_Context/Context";
import { Link } from "react-router-dom";
import HeaderLinks from "../02_HeaderLinks/HeaderLinks";
import Theme from "../../03_Theme/Theme_toggler";
const Header = () => {
  // const { isDarkMode } = useContext(Context);
  return (
    <>
      <header className={`nav_container `}>
        <Link className="logo">
          <img src="/logo/siraj.png" alt="logo" width={70} />
        </Link>
        <HeaderLinks />
        <div className="theme_toggler">
          <Theme />
        </div>
      </header>
    </>
  );
};

export default Header;
