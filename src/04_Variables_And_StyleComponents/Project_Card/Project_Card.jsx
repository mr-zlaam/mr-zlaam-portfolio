import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../01_Context/Context";
import { RiArrowRightSLine } from "react-icons/ri";
import "./Project_Card.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImageLoader from "../ImageLoader/ImageLoader";
const Project_Card = ({ data }) => {
  const {
    setIsModalOpen,
    setIsSelectedData,
    isDarkMode,
    setIsImageLoaded,
    isImageLoaded,
  } = useContext(Context);
  const { image } = data;

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
      <div className={`project_card ${isDarkMode ? "dark_bg" : "light_bg"}`}>
        {!isImageLoaded ? (
          <div className="imgLoaderContainer">
            <ImageLoader />
          </div>
        ) : (
          <>
            <LazyLoadImage effect="blur" src={image} alt={data.project_title} />
            <div className="project_content">
              <div onClick={handleModalOpen} className="btn_div">
                <span className="btn_txt">View Site</span>
                <span className="btn_icon">
                  <RiArrowRightSLine />
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Project_Card;
