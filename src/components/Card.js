import React from "react";
import "../Css/Card.css"
import { Link } from "react-router-dom";


function Card(props) {
 
  return (
    <div className="cards">
      <div className="card">
        <img
          src={props.imgSrc}
          style={{ width: "90px", height: "90px" }}
          alt="myPic"
          className="card_img"
        ></img>
        <div className="card__info">
          <h3 className="card_name">{props.name} </h3>
          <span className="card__description">{props.description} </span>
          <br />

          <Link to={props.link} className="button">
            GO
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
