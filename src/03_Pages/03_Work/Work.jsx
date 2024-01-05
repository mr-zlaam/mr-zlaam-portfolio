import { useContext } from "react";
import "./Work.scss";
import project_data from "./Work.json";
import Project_Modal from "../../04_Variables_And_StyleComponents/Project_Modal/Project_Modal";
import { Context } from "../../01_Context/Context";
import Project_Card from "../../04_Variables_And_StyleComponents/Project_Card/Project_Card";
const Work = () => {
  const { isModalOpen } = useContext(Context);

  return (
    <>
      <div className="main_work_container">
        <h1>My Latest Work</h1>
        <div className="projects_controller">
          <div className="projects">
            {project_data &&
              project_data.map((data) => {
                return (
                  <div key={data.id}>
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
