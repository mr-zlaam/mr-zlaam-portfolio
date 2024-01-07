import { useContext } from "react";
import "./Project_Modal.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { Context } from "../../01_Context/Context";

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
          <img src={isSelectedData.image} alt="" />
        </div>
        <div className="description_controller">
          <h1 className="project_title">{isSelectedData.project_title}</h1>
          <h1 className="project_desc_txt">About Project:-</h1>
          <p className="project_desc">{isSelectedData.project_desc}</p>
        </div>
      </div>
    </>
  );
};

export default Project_Modal;
