import { useContext, useEffect } from "react";
import "./Work.scss";
import project_data from "../../Work.json";
import { Link } from "react-router-dom";
import { HiDownload } from "react-icons/hi";
import { Loader, Context, Project_Modal, Project_Card } from "../../index.js";

const Work = () => {
  const { isModalOpen, isDarkMode, isOnline } = useContext(Context);
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
      {!isOnline ? (
        <Loader />
      ) : (
        <div className="main_work_container">
          <h1>Some Latest Work</h1>
          <div className="projects_controller">
            <span className="cta resume_container">
              <HiDownload />
              <Link
                target="_blank"
                rel="Resume of Zlaam"
                to="https://drive.google.com/file/d/1JrFEvYp3EI3fY0iSrKmVpovWwXGruSc0/view"
                className={LinkClass}
              >
                Resume
              </Link>
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
      )}
    </>
  );
};

export default Work;
