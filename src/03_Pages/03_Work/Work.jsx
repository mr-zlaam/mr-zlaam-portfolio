import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import project_data from "../../Work.json";
import { Project_Card, Project_Modal, Context } from "../../05_Exporter.js";
import { useContext } from "react";
import "./Work.scss";
import { HiDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
const Work = () => {
  const { isModalOpen, isDarkMode } = useContext(Context);

  const responsive = {
    desktop: {
      breakpoint: { max: 3120, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const LinkClass = `${
    isDarkMode
      ? "link_animation_light white_color"
      : "link_animation_dark black_color"
  }`;
  return (
    <>
      <div className="projects">
        <div className="main_work_container">
          <h1>Some Latest Work</h1>
          <div className="projects_controller">
            <span className="cta resume_container">
              <HiDownload />
              <Link className={LinkClass}>Resume</Link>
            </span>
          </div>
        </div>
        <Carousel
          className="pointer"
          responsive={responsive}
          infinite={true}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          autoPlaySpeed={15000}
          autoPlay={true}
        >
          {project_data &&
            project_data.map((data) => {
              return (
                <div key={data.id}>
                  <div className="projectsdata" key={data.id}>
                    <Project_Card data={data} />
                  </div>
                </div>
              );
            })}
        </Carousel>
        {isModalOpen && <Project_Modal />}
      </div>
    </>
  );
};
export default Work;
