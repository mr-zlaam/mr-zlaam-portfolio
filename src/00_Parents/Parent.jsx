import { useContext, useEffect, useState, useLayoutEffect } from "react";
import "./Parents.scss";
import { Context } from "../01_Context/Context";
import { Header, Loader, Routers } from "../05_Exporter.js";
import { useRef } from "react";

const Parents = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const DivRef = useRef(null);
  const { isErrorPage } = useContext(Context);

  const theme = localStorage.getItem("isDarkMode");

  useEffect(() => {
    const handleLoad = () => {
      setIsAppReady(false);
    };
    const simTiming = setTimeout(() => {
      handleLoad();
    }, 3000);
    return () => clearTimeout(simTiming, 0);
  }, []);
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
              {isErrorPage ? null : <Header />} <Routers />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Parents;
