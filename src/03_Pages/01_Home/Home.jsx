import { useEffect } from "react";

import "./Home.scss";

const Home = () => {
  let pageName = "Home";
  useEffect(() => {
    document.title = `Zlaam | ${pageName}`;
    window.scrollTo(0, 0);
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
