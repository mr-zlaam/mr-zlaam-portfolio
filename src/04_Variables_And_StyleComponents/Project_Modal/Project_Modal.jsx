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
          <FaArrowLeft className="modal_closer_icon" />
        </div>
        <img src={isSelectedData.image} alt="" />
        <h1>{isSelectedData.project_title}</h1>
      </div>
    </>
  );
};

export default Project_Modal;
