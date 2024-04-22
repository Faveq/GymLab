import React from "react";
import "../../Styles/HomePageStyles/Tile.css"

const Tile = (props) => {
    const { title, description, icon } = props;
  
  return <div className="tile">
    <div className="icon-container">{icon}</div>
    <h2>{title}</h2>
    <p>{description}</p>
    </div>
};

export default Tile;
