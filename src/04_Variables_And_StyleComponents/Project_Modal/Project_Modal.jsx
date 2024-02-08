import { useContext } from "react";
import "./Project_Modal.scss";
import { TbExternalLink } from "react-icons/tb";

import { FaArrowLeft } from "react-icons/fa6";
import { Context } from "../../index";
import { Link } from "react-router-dom";

const Project_Modal = () => {
  const { isModalOpen, setIsModalOpen, isSelectedData, isDarkMode } =
    useContext(Context);
  const handle_modal_closer = () => {
    if (isModalOpen) return setIsModalOpen(false);
  };
  return (
    <>
      <div
        className={`main_modal_container ${
          isDarkMode ? "dark_bg" : "light_bg"
        }`}
      >
        <div onClick={handle_modal_closer} className="modal_closer">
          <FaArrowLeft />
        </div>
        <div className="image_controller">
          <img src={isSelectedData.image} alt={isSelectedData.project_title} />
        </div>
        <div className="description_controller">
          <h1 className="project_title">{isSelectedData.project_title}</h1>
          <h1 className="project_desc_txt">About Project:-</h1>
          <p className="project_desc">{isSelectedData.project_desc}</p>
        </div>
        <span className="project_btn">
          <Link to={isSelectedData.project_url} target="_blank">
            Visit Project <TbExternalLink />
          </Link>
        </span>
      </div>
    </>
  );
};

export default Project_Modal;
