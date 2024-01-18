import { useContext } from "react";
import "./HeaderLinks.scss";
import { Link } from "react-router-dom";
import { Context } from "../../../01_Context/Context";
const HeaderLinks = () => {
  const { isDarkMode, isMenuOpen, setIsMenuOpen } = useContext(Context);
  const menu_closer = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      {isMenuOpen && <div className="nav_closer" onClick={menu_closer} />}
      <nav
        className={` ${isMenuOpen ? "navbar_visible " : "navbar_invisible"}  ${
          isDarkMode ? "white_color  " : "black_color "
        }
        ${isDarkMode ? "bg_dark  " : "bg_light "}
            
          `}
      >
        <span onClick={menu_closer} className="cta routes">
          <Link
            to={"/"}
            className={`${
              isDarkMode
                ? "link_animation_light white_color"
                : "link_animation_dark black_color "
            }`}
          >
            Home
          </Link>
        </span>
        <span onClick={menu_closer} className="cta routes">
          <Link
            to={"/expertise"}
            className={`${
              isDarkMode
                ? "link_animation_light white_color"
                : "link_animation_dark black_color "
            }`}
          >
            Expertise
          </Link>
        </span>
        <span onClick={menu_closer} className="cta routes">
          <Link
            to={"work"}
            className={`${
              isDarkMode
                ? "link_animation_light white_color"
                : "link_animation_dark black_color "
            }`}
          >
            Work
          </Link>
        </span>
        <span onClick={menu_closer} className="cta routes">
          <Link
            to={"/contact"}
            className={`${
              isDarkMode
                ? "link_animation_light white_color"
                : "link_animation_dark black_color "
            }`}
          >
            Contact
          </Link>
        </span>
      </nav>
    </>
  );
};

export default HeaderLinks;
