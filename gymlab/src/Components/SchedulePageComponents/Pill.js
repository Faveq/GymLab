import React from "react";
import "../../Styles/SchedulePageStyles/Pill.css"

const Pill = (props) => {
    const {content, onClick, name} = props
  return <div className="pillContainer">
        <button className="pill" name={name} onClick={onClick}>{content}</button>
    </div>
};

export default Pill;
