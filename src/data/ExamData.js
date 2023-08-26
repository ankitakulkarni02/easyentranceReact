import Home from "../components/Home";
import JEE from "../ExamCard/JEE";
import JEEAdvance from "../ExamCard/JEEAdvance";
import KCET from "../ExamCard/KCET";
import MhtCet from "../ExamCard/MhtCet";

import NeetCard from "../ExamCard/NeetCard";

const ExamData = [
  {
    name: "MHT-CET",
    imgSrc: "./assets/image.jpg",
    description: "MHT-CET is engg. entrance exams",
    link: "/MhtCET",
    component: MhtCet,
  },
  {
    name: "NEET",
    imgSrc: "./assets/image.jpg",
    description: "MHT-CET is engg. entrance exams",
    link: "/NEET",
    component: NeetCard,
  },
  {
    name: "K-CET",
    imgSrc: "./assets/image.jpg",
    description: "MHT-CET is engg. entrance exams",
    link: "/K-CET",
    component: KCET,
  },
  {
    name: "JEE",
    imgSrc: "./assets/image.jpg",
    description: "MHT-CET is engg. entrance exams",
    link: "/JEE",
    component: JEE,
  },
  {
    name: "JEE-Advance",
    imgSrc: "./assets/image.jpg",
    description: "MHT-CET is engg. entrance exams",
    link: "/advance",
    component: JEEAdvance,
  },
];
export default ExamData;
