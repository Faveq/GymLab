import React from "react";
import "../Styles/App.css"

const SmallBanner = (props) => {
    const {title} = props

  return <div className="smallBanner" style={{backgroundImage: 'url("Images/banner.jpg")'}}>
    <h1>{title}</h1>
    </div>
};

export default SmallBanner;
