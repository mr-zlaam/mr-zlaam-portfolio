import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../01_Context/Context";
import { RiArrowRightSLine } from "react-icons/ri";
import "./Project_Card.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Loader from "../Loader/Loader";
const Project_Card = ({ data }) => {
  const { setIsModalOpen, setIsSelectedData, isDarkMode } = useContext(Context);
  const { image } = data;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsImageLoaded(true);
    };
    img.src = image;
  }, [image]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    setIsSelectedData(data);
  };

  return (
    <>
      {!isImageLoaded ? (
        <Loader />
      ) : (
        <div className={`project_card ${isDarkMode ? "dark_bg" : "light_bg"}`}>
          <LazyLoadImage effect="blur" src={image} alt={data.project_title} />

          <div className="project_content">
            <div onClick={handleModalOpen} className="btn_div">
              <span className="btn_txt">View Site</span>
              <span className="btn_icon">
                <RiArrowRightSLine />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project_Card;
