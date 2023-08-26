import React from 'react'
import "../Css/Neet.css"
const ExamCard = (props) => {
  return (
    <div>
    <div className="horizontal-card">
    <div className="content">
      <h2 className="title">{props.title}</h2>
      <a
        href={props.file} // Adjust the PDF file path
        download={props.saveAs} // Set the desired filename
        className="download-link"
      >
        Download PDF 📄
      </a>
    </div>
  </div>
   
    </div>
  )
}

export default ExamCard
