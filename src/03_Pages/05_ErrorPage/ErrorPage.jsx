import { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  let pageName = "Not Found";
  useEffect(() => {
    document.title = `Zlaam | ${pageName}`;
  }, [pageName]);
  return (
    <div className="error_control_main">
      <div className="error_control">
        <span>Error 404: </span> <span> Page Not Found</span>
      </div>
      <span className="cta homeNavigate">
        <Link to={"/"} className={`link_animation_light white_color`}>
          <span>Home</span> <FaLongArrowAltRight />
        </Link>
      </span>
    </div>
  );
};

export default ErrorPage;
