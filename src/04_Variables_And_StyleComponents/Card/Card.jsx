import { useContext, useEffect, useState } from "react";
import "./Card.scss";
import { Context, ExpertieseLoader } from "../../index";
const Card = ({ data }) => {
  const { isDarkMode } = useContext(Context);
  const { image, title, content } = data;
  const [isDataLoaded, setisDataLoaded] = useState();
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setisDataLoaded(true);
    };
    img.src = image;
  }, [image]);
  return (
    <>
      <div className={`card ${isDarkMode ? "dark_card" : "light_card"}`}>
        {!isDataLoaded ? (
          <ExpertieseLoader />
        ) : (
          <img src={image} alt={data.title} />
        )}
        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__description">{content} </p>
        </div>
      </div>
    </>
  );
};

export default Card;
