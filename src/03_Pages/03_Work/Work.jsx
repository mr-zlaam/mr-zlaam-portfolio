import { useContext, useEffect, useState } from "react";
import "./Work.scss";
import project_data from "./Work.json";
import Project_Modal from "../../04_Variables_And_StyleComponents/Project_Modal/Project_Modal";
import { Context } from "../../01_Context/Context";
import Project_Card from "../../04_Variables_And_StyleComponents/Project_Card/Project_Card";

const Work = () => {
  const { isModalOpen } = useContext(Context);
  const [images, setImages] = useState([]);

  // Fetch images from your JSON file
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setImages(project_data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  // Preload images when the component mounts
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((data) => {
        const img = new Image();
        img.src = data.image;
      });
    };

    preloadImages();
  }, [images]);

  return (
    <>
      <div className="main_work_container">
        <h1>My Latest Work</h1>
        <div className="projects_controller">
          <div className="projects">
            {images.map((data) => (
              <div className="projectsdata" key={data.id}>
                <Project_Card data={data} />
                {isModalOpen && <Project_Modal />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
