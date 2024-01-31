import { useContext, useEffect, useState, useLayoutEffect } from "react";
import "./Parents.scss";
import { Context } from "../01_Context/Context";
import { Header, Loader, Routers } from "../05_Exporter.js";
import { useRef } from "react";

const Parents = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const DivRef = useRef(null);
  const { isDarkMode, isErrorPage } = useContext(Context);

  // Use useEffect to handle the load event
  useEffect(() => {
    const handleLoad = () => {
      setIsDomLoaded(true);
    };

    window.addEventListener("load", handleLoad);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Use useLayoutEffect to handle rendering delay
  useLayoutEffect(() => {
    if (isDomLoaded) {
      // Simulate the delay for 3 seconds
      const timeoutId = setTimeout(() => {
        setIsAppReady(true);
      }, 3000);

      // Cleanup function to clear the timeout
      return () => clearTimeout(timeoutId);
    }
  }, [isDomLoaded]);

  return (
    <>
      <div>
        <div
          ref={DivRef}
          className={`${
            isDarkMode
              ? "child_container_dark white_color"
              : "child_container_light  black_color"
          }`}
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
