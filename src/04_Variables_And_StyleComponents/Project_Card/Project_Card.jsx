import { Fragment, useEffect, useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { RiArrowRightSLine } from "react-icons/ri";
import "./Project_Card.scss";
import { Link } from "react-router-dom";
import ImageLoader from "../ImageLoader/ImageLoader";
function Project_Card({ myData }) {
  const [isImageLoaded, setisImageLoaded] = useState(false);
  const image = myData?.imageContainer?.image;
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setisImageLoaded(true);
    };
    img.src = image;
  }, []);
  return (
    <>
      {!isImageLoaded ? (
        <div className="dummyCard">
          <ImageLoader />
        </div>
      ) : (
        <div className="project_card_container">
          <Fragment>
            <LazyLoadImage
              effect="blur"
              src={myData?.imageContainer?.image}
              alt={myData.project_title}
            />

            <div className="link_container">
              <Link
                className={`modal_navigator `}
                to={`/project/detail/${myData?.project_title}`}
              >
                <span className="link_text">View Site</span>
                <span className="arrow_head">
                  <RiArrowRightSLine />
                </span>
              </Link>
            </div>
          </Fragment>
        </div>
      )}
    </>
  );
}

export default Project_Card;
