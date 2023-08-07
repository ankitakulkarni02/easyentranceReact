import React, { useState } from "react";
import "./Card.css";
import PdfViewer from "./PdfViewer";
function Card(props) {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleButtonClick = () => {
    setSelectedPdf(<PdfViewer pdfUrl="./assets/pdf1.pdf" />);
  };
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
          <br></br>

          <button onClick={handleButtonClick} className="button">
            GO
          </button>
        </div>
        {selectedPdf}
      </div>
    </div>
  );
}

export default Card;
