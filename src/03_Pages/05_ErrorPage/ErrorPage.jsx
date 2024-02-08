import { FaLongArrowAltRight } from "react-icons/fa";
import { useContext, useEffect } from "react";
import "./ErrorPage.scss";
import { Link } from "react-router-dom";
import { Context } from "../../index";

const ErrorPage = () => {
  const { setIsErrorPage } = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);

    const Error_toggler = () => {
      setIsErrorPage(true);
    };
    Error_toggler();
  }, [ErrorPage, setIsErrorPage]);
  const { isDarkMode } = useContext(Context);

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
        <Link
          to={"/"}
          className={`${
            isDarkMode
              ? " link_animation_light white_color"
              : " link_animation_dark black_color"
          }`}
        >
          <span>Home</span> <FaLongArrowAltRight />
        </Link>
      </span>
    </div>
  );
};

export default ErrorPage;
