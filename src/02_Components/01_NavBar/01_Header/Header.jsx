import {} from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="nav">
        <span className="cta">
          <Link className="link_animation_dark"> Shop now </Link>
        </span>
      </div>
    </>
  );
};

export default Header;
