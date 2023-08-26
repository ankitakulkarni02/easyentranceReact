import React from "react";
import Card from "./Card";
import ExamData from "../data/ExamData.js";
function ECards(val) {
  return (
    <Card
      name={val.name}
      imgSrc={val.imgSrc}
      description={val.description}
      link={val.link}
      component={val.component}
    />
  );
}
const EntranceExams = () => {
  return <div className="EntranceHome">{ExamData.map(ECards)}</div>;
};

export default EntranceExams;
