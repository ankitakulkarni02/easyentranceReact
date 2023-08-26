import React from "react";
import MhtCetData from "../data/MhtCetData";

import ExamCard from "./ExamCard";
function NCard(val) {
  return <ExamCard title={val.title} file={val.file} saveAs={val.saveAs} />;
}
const MhtCet = () => {
  return (
    <div>
      <div className="EntranceHome">{MhtCetData.map(NCard)}</div>
    </div>
  );
};

export default MhtCet;
