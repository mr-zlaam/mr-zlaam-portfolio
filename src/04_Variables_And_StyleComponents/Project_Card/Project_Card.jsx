import React, { useContext, useEffect, useState } from "react";
import { Context, ImageLoader } from "../../index";
import { RiArrowRightSLine } from "react-icons/ri";
import "./Project_Card.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Project_Card = ({ data }) => {
  const {
    setIsModalOpen,
    setIsSelectedData,

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
      {!isImageLoaded ? (
        <div className="imgLoaderContainer">
          <ImageLoader />
        </div>
      ) : (
        <div className={`project_card`}>
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
        </div>
      )}
    </>
  );
};

export default Project_Card;
