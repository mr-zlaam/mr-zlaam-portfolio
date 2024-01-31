import { useContext, useEffect } from "react";
import "./Work.scss";
import project_data from "../../Work.json";
import Project_Modal from "../../04_Variables_And_StyleComponents/Project_Modal/Project_Modal";
import { Context } from "../../01_Context/Context";
import Project_Card from "../../04_Variables_And_StyleComponents/Project_Card/Project_Card";
import { Link } from "react-router-dom";
import { HiDownload } from "react-icons/hi";

const Work = () => {
  const { isModalOpen, isDarkMode } = useContext(Context);
  let pageName = "Work";
  useEffect(() => {
    document.title = `Zlaam | ${pageName}`;
  }, [pageName]);
  const LinkClass = `${
    isDarkMode
      ? "link_animation_light white_color"
      : "link_animation_dark black_color"
  }`;

  return (
    <>
      <div className="main_work_container">
        <h1>Some Latest Work</h1>
        <div className="projects_controller">
          <span className="cta resume_container">
            <HiDownload />
            <Link className={LinkClass}>Resume</Link>
          </span>
          <div className="projects">
            {project_data &&
              project_data.map((data) => {
                return (
                  <div className="project_data" key={data.id}>
                    <Project_Card data={data} />
                    {isModalOpen && <Project_Modal />}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
