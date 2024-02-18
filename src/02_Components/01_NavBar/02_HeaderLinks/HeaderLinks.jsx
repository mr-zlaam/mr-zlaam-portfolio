import { useContext } from "react";
import "./HeaderLinks.scss";
import { Context } from "../../../index";
import { NavLink } from "react-router-dom";
const HeaderLinks = ({ isMenuOpens, setIsMenuOpens }) => {
  const { isDarkMode } = useContext(Context);
  const menu_closer = () => {
    setIsMenuOpens(false);
  };
  let themeClass = isDarkMode
    ? "link_animation_light white_color"
    : "link_animation_dark black_color ";
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
        className={` ${isMenuOpens ? "navbar_visible " : "navbar_invisible"}  ${
          isDarkMode ? "white_color  " : "black_color "
        }
        ${isDarkMode ? "bg_dark  " : "bg_light "}
          `}
      >
        {RoutesPath?.map((data) => {
          return (
            <span key={data.text} onClick={menu_closer} className="cta routes">
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "active" : "not_active"}  ${themeClass}`
                }
                to={data.path}
              >
                {data.text}
              </NavLink>
            </span>
          );
        })}
      </nav>
    </>
  );
};

export default HeaderLinks;
