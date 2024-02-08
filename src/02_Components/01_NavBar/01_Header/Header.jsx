import "./Header.scss";
import { useContext, useEffect } from "react";
import { Context, MenuBar, Theme, HeaderLinks, Link } from "../../../index";
const Header = () => {
  const { setIsErrorPage, isMenuOpen, setIsMenuOpen } = useContext(Context);

  useEffect(() => {
    setIsErrorPage(false);
  }, [Header]);
  const menu_closer = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      {isMenuOpen && <div className="nav_closer" onClick={menu_closer} />}

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
