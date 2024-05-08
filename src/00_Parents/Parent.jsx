import { useEffect, useRef, useState } from "react";
import { Cursor, Loader } from "../index";
import "./Parents.scss";

const Parents = ({ children }) => {
  const [isAppReady, setIsAppReady] = useState(false);

  const DivRef = useRef(null);
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
          <Cursor />

          {!isAppReady ? <Loader /> : <div>{children}</div>}
        </div>
      </div>
    </>
  );
};

export default Parents;
