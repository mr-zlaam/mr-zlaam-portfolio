import "./Expertise.scss";
import data from "../../About.json";

import Card from "../../04_Variables_And_StyleComponents/Card/Card.jsx";
import { useEffect } from "react";
const Expertise = () => {
  let pageName = "Expertise";
  useEffect(() => {
    document.title = `Zlaam | ${pageName}`;
  }, [pageName]);
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  return (
    <>
      <div className="main_about_container">
        <h1>Who Am I ?</h1>
        <div className="info_about">
          <h2>Hello there!</h2>
          <p>
            I am Zlaam, a dedicated and skilled full-stack web app developer
            with several years of hands-on experience. My true passion lies in
            transforming concepts into tangible digital solutions, and I
            wholeheartedly embrace new challenges that come my way. I am
            proficient in languages such as JavaScript and Python, and I
            specialize in creating dynamic and responsive web applications. My
            goal is to continue pushing the boundaries of innovation in the
            ever-evolving field of web development.
          </p>
        </div>
        <div className="date_about">
          <div className="date_wrapper">
            <span>{date}-</span>
            <span>{month}-</span>
            <span>{year}</span>
            <div className="avail">AVAILABLE FOR COLLABORATION</div>
          </div>
        </div>
        <div className="expertise_about">
          <h1>My Expertiese:-</h1>
          <div className="main_card">
            {data &&
              data.map((data) => {
                return (
                  <div key={data.title}>
                    <Card data={data} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
