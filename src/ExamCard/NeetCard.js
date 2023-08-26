import React from "react";

import NeetData from "../data/NeetData.js";
import ExamCard from "./ExamCard.js";
function NCard(val) {
  return <ExamCard title={val.title} file={val.file} saveAs={val.saveAs} />;
}
const NeetCard = () => {
  return (
    <div>
      <div className="EntranceHome">{NeetData.map(NCard)}</div>
    </div>
  );
};

export default NeetCard;
