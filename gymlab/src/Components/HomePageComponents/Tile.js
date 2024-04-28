import React from "react";
import "../../Styles/HomePageStyles/Tile.css"

const Tile = (props) => {
    const { title, description, icon, backgroundImg} = props;
  
  return <div className="tile" style={backgroundImg ? {backgroundImage: `url(${backgroundImg})`} : {}}>
    <div className="icon-container">{icon}</div>
    <h2>{title}</h2>
    <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
};

export default Tile;
