// import React from "react";
// import Card from "./Card";

// const EntranceExams = () => {
//   return (
//     <Card
//       name="MHT-CET"
//       imgSrc="C:UsersANKITADesktopeasyentrancepublicassetsimage.jpg"
//       description="MHT-CET is engg. entrance exams"
//     />
//   );
// };

// export default EntranceExams;
import React from "react";
import Card from "./Card";
import ExamData from "./ExamData.js";
function ECards(val){
  return(
    <Card
    name={val.name}
    imgSrc={val.imgSrc}
    description={val.description}
  />
  );
}
const EntranceExams = () => {
  return (
   
    <div className="EntranceHome">
     
     {ExamData.map(ECards)}
     </div>
    
  );
};

export default EntranceExams;
