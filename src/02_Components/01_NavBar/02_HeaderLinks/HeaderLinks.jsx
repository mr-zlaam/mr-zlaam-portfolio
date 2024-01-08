import { useContext } from "react";
import "./HeaderLinks.scss";
import { Link } from "react-router-dom";
import { Context } from "../../../01_Context/Context";
import { motion } from "framer-motion";
const HeaderLinks = () => {
  const { isDarkMode, isMenuOpen, setIsMenuOpen } = useContext(Context);
  const menu_closer = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      {isMenuOpen && <div className="nav_closer" onClick={menu_closer} />}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={` ${isMenuOpen ? "navbar_visible " : "navbar_invisible"}  ${
          isDarkMode ? "white_color  " : "black_color "
        }
        ${isDarkMode ? "bg_dark  " : "bg_light "}
            
          `}
      >
        <span onClick={menu_closer} className="cta routes">
          <Link
            to={"/"}
            className={`terms_navigator ${
              isDarkMode ? "link_animation_light " : "link_animation_dark "
            }`}
            style={isDarkMode ? { color: "white" } : { color: "#000" }}
          >
            Home
          </Link>
        </span>
        <span onClick={menu_closer} className="cta routes">
          <Link
            to={"/expertise"}
            className={`${
              isDarkMode ? "link_animation_light " : "link_animation_dark "
            }`}
            style={isDarkMode ? { color: "white" } : { color: "#000" }}
          >
            Expertise
          </Link>
        </span>
        <span onClick={menu_closer} className="cta routes">
          <Link
            to={"work"}
            className={`${
              isDarkMode ? "link_animation_light " : "link_animation_dark "
            }`}
            style={isDarkMode ? { color: "white" } : { color: "#000" }}
          >
            Work
          </Link>
        </span>
        <span onClick={menu_closer} className="cta routes">
          <Link
            to={"/contact"}
            className={`${
              isDarkMode ? "link_animation_light " : "link_animation_dark "
            }`}
            style={isDarkMode ? { color: "white" } : { color: "#000" }}
          >
            Contact
          </Link>
        </span>
      </motion.nav>
    </>
  );
};

export default HeaderLinks;
