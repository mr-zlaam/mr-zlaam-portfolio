import { useContext } from "react";
import "./HeaderLinks.scss";
import { Link } from "react-router-dom";
import { Context } from "../../../01_Context/Context";
const HeaderLinks = () => {
  const { isDarkMode } = useContext(Context);
  return (
    <>
      <div className="navLinks_container">
        <nav className={`${isDarkMode ? "white_color" : "black_color"}`}>
          <span className="cta routes">
            <Link
              to={"/"}
              className={`${
                isDarkMode ? "link_animation_light " : "link_animation_dark "
              }`}
              style={isDarkMode ? { color: "white" } : { color: "#000" }}
            >
              Home
            </Link>
          </span>
          <span className="cta routes">
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
          <span className="cta routes">
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
          <span className="cta routes">
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
        </nav>
      </div>
    </>
  );
};

export default HeaderLinks;
