import "./Work.scss";
import project_data from "../../Work.json";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { HiDownload } from "react-icons/hi";
import { useContext } from "react";
import { Context } from "../../01_Context/Context";
import Project_Card from "../../04_Variables_And_StyleComponents/Project_Card/Project_Card";
import ExpertieseLoader from "../../04_Variables_And_StyleComponents/ExpertiseLoader/ExpertiseLoader";
const fetchImages = () => {
  const url = project_data;
  return url;
};

const Work = () => {
  const { isDarkMode } = useContext(Context);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["data"],
    queryFn: fetchImages,
    placeholderData: keepPreviousData,
  });
  const LinkClass = `${
    isDarkMode
      ? "link_animation_light white_color"
      : "link_animation_dark black_color"
  }`;
  if (isLoading)
    return (
      <div className="loadingState">
        <ExpertieseLoader />
      </div>
    );
  if (isError) return <div className="loadingState">{error.message}</div>;

  return (
    <main className="work_container">
      <section className="section_up">
        <h1 className="some_latest_work">Some Latest Work</h1>
        <h2 className="cta resume_container">
          <HiDownload />
          <Link
            target="_blank"
            rel="Resume of Zlaam"
            to="https://drive.google.com/file/d/1JrFEvYp3EI3fY0iSrKmVpovWwXGruSc0/view"
            className={LinkClass}
          >
            Resume
          </Link>
        </h2>
      </section>
      <section className="section_down">
        <div className="work_card_container">
          {data?.map((data) => {
            return (
              <div key={data.id}>
                <Project_Card myData={data} />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Work;
