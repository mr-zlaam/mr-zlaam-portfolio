import { useContext } from "react";
import "./Project_Card.scss";
import { RiArrowRightSLine } from "react-icons/ri";
import { Context } from "../../01_Context/Context";

const Project_Card = ({ data }) => {
  const { setIsModalOpen, setIsSelectedData, isDarkMode } = useContext(Context);
  const { image } = data;
  const handleModalOpen = () => {
    setIsModalOpen(true);
    setIsSelectedData(data);
  };
  return (
    <>
      <div className={`project_card ${isDarkMode ? "dark_bg" : "light_bg"}`}>
        <img src={image} alt="img" />
        <div className="project_content">
          <div onClick={handleModalOpen} className="btn_div">
            <span className="btn_txt">View Site</span>
            <span className="btn_icon">
              <RiArrowRightSLine />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project_Card;
