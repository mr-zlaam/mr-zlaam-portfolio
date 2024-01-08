import { useContext, useEffect } from "react";

import "./Home.scss";
import { Context } from "../../01_Context/Context";
const Home = () => {
  const { setIsErrorPage } = useContext(Context);
  let pageName = "Home";
  useEffect(() => {
    setIsErrorPage(false);
    document.title = `Zlaam | ${pageName}`;
  }, [pageName]);
  return (
    <>
      <div className="home_parent">
        <div className="home_container">
          <div className="home_content">
            <div className="home_about ">
              Hi.{" I'm"} Zláam. <br />A FullStack Web-Dev.
            </div>
            <div className="about_img_container ">
              <img
                src="https://live.staticflickr.com/65535/53281434521_eeef635514_z.jpg"
                alt="zlaam"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
