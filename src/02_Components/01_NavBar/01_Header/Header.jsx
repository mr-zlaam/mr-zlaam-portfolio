import { useCallback, useState } from "react";
import { MdClear } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { HeaderLinks, Link, Theme } from "../../../index";
import "./Header.scss";
const Header = () => {
  const [isMenuOpens, setIsMenuOpens] = useState(false);

  const menu_closer = () => {
    setIsMenuOpens(false);
  };
  const menu_toggler = useCallback(() => {
    setIsMenuOpens((prev) => !prev);
  }, []);

  return (
    <>
      {isMenuOpens && <div className="nav_closer" onClick={menu_closer} />}

      <header className={`nav_container`}>
        <Link to={"/"} className="logo">
          <img src="/logo/zlaam.png" alt="logo" />
        </Link>
        <HeaderLinks
          isMenuOpens={isMenuOpens}
          setIsMenuOpens={setIsMenuOpens}
        />
        <div className={`menu_bar`}>
          {isMenuOpens ? (
            <div onClick={menu_toggler} className="menu">
              <MdClear size={25} />
            </div>
          ) : (
            <div onClick={menu_toggler} className="clear">
              <RiMenu3Fill size={25} />
            </div>
          )}{" "}
        </div>
        <div className="theme_toggler">
          <Theme />
        </div>
      </header>
    </>
  );
};

export default Header;
