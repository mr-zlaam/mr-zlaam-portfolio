import { memo, useContext } from "react";
import "./HeaderLinks.scss";
import { Context, Link } from "../../../index";
const HeaderLinks = () => {
  const { isDarkMode, isMenuOpen, setIsMenuOpen } = useContext(Context);
  const menu_closer = () => {
    setIsMenuOpen(false);
  };
  const RoutesPath = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/expertise",
      text: "Expertise",
    },
    {
      path: "/work",
      text: "Work",
    },
    {
      path: "/contact",
      text: "Contact",
    },
  ];

  return (
    <>
      <nav
        className={` ${isMenuOpen ? "navbar_visible " : "navbar_invisible"}  ${
          isDarkMode ? "white_color  " : "black_color "
        }
        ${isDarkMode ? "bg_dark  " : "bg_light "}
          `}
      >
        {RoutesPath?.map((data) => {
          return (
            <span key={data.text} onClick={menu_closer} className="cta routes">
              <Link
                className={`${
                  isDarkMode
                    ? "link_animation_light white_color"
                    : "link_animation_dark black_color "
                }`}
                to={data.path}
              >
                {data.text}
              </Link>
            </span>
          );
        })}
      </nav>
    </>
  );
};

export default memo(HeaderLinks);
