import { keepPreviousData, useQuery } from "@tanstack/react-query";
import "./Project_Modal.scss";
import { useParams } from "react-router-dom";
import projectData from "../../Work.json";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ExpertieseLoader from "../ExpertiseLoader/ExpertiseLoader";
function Project_Modal() {
  const { title } = useParams();

  const fetchData = () => {
    const getData = projectData.filter((data) => data.project_title === title);
    return getData;
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["modal_data"],
    queryFn: fetchData,
    staleTime: 1200000,
    placeholderData: keepPreviousData,
  });
  if (isLoading)
    return (
      <div>
        <div className="loadingState">
          <ExpertieseLoader />
          hero
        </div>
      </div>
    );
  if (isError) return <div className="loadingState">!{error.message}</div>;
  const theme = localStorage.getItem("isDarkMode");

  return (
    <>
      <main className="main_modal_container">
        <Link title="exit" to={"/work"} className="return_to_main_page">
          <FaArrowLeft
            color={theme && theme === "true" ? "#ffffff" : "#28282b"}
          />
        </Link>
        <section className="modal_image_container">
          <LazyLoadImage
            effect="blur"
            src={data[0]?.imageContainer["image"]}
            width={"60%"}
          />
        </section>
        <div className="description_controller">
          <h1 className="project_title">{data[0]?.project_title}</h1>
          <h1 className="project_desc_txt">About Project:</h1>
          <p className="project_desc">{data[0]?.project_desc}</p>
        </div>{" "}
      </main>

      {/* bottom button */}
      <div className="project_btn">
        <Link to={data[0]?.project_url} target="_blank">
          Visit Project <TbExternalLink />
        </Link>
      </div>
    </>
  );
}

export default Project_Modal;
