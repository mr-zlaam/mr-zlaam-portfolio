import { useEffect, useRef, useState } from "react";
import { Cursor, Loader } from "../index";
import "./Parents.scss";

const Parents = ({ children }) => {
  const [isAppReady, setIsAppReady] = useState(false);

  const DivRef = useRef(null);

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
        <div ref={DivRef} className={`child_container dark_bg white_color`}>
          <Cursor />

          {!isAppReady ? <Loader /> : <div>{children}</div>}
        </div>
      </div>
    </>
  );
};

export default Parents;
