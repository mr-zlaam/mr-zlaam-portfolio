import { useContext } from "react";
import "./Card.scss";
import { Context } from "../../01_Context/Context";
const Card = ({ data }) => {
  const { isDarkMode } = useContext(Context);
  return (
    <>
      <div className={`card ${isDarkMode ? "dark_card" : "light_card"}`}>
        <img src={data.image} alt="" />
        <div className="card__content">
          <p className="card__title">{data.title}</p>
          <p className="card__description">{data.content} </p>
        </div>
      </div>
    </>
  );
};

export default Card;
