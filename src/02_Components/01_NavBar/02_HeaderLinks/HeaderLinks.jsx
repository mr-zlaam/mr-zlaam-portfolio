import { NavLink } from "react-router-dom";
import "./HeaderLinks.scss";
const HeaderLinks = ({ isMenuOpens, setIsMenuOpens }) => {
  const menu_closer = () => {
    setIsMenuOpens(false);
  };
  let themeClass = "link_animation_light white_color";
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
        className={` ${
          isMenuOpens ? "navbar_visible " : "navbar_invisible"
        } white_color bg_dark
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
