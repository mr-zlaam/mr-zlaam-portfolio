import { useContext, useEffect, useState } from "react";
import "./Parents.scss";
import { Header, Loader, Routers, Context } from "../index";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Parents = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  const DivRef = useRef(null);
  const { isErrorPage } = useContext(Context);
  const theme = localStorage.getItem("isDarkMode");

  useEffect(() => {
    const handleLoad = () => {
      setIsAppReady(true);
    };
    const simTiming = setTimeout(() => {
      handleLoad();
    }, 3000);
    return () => clearTimeout(simTiming, 0);
  }, []);
  const getLocation = useLocation();
  const getCurrentpath = getLocation.pathname.includes("/project/detail");
  return (
    <>
      <div>
        <div
          ref={DivRef}
          className={`child_container  ${
            theme && theme === "true"
              ? "dark_bg white_color"
              : "light_bg black_color"
          } `}
        >
          {!isAppReady ? (
            <Loader />
          ) : (
            <div>
              {isErrorPage || getCurrentpath ? null : <Header />}

              <Routers />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Parents;
