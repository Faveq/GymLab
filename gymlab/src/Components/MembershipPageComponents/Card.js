import React from "react";
import "../../Styles/MembershipPageStyles/Cards.css";

const Card = (props) => {
  const { backgroundImg, heading, price, benefits } = props;
  return (
    <div
      className="card"
    >
        <img src={process.env.PUBLIC_URL + backgroundImg} alt="background"/>
      <div className="cardBody">
        <h2 className="heading">{heading}</h2>
        <h1 className="price">{price}</h1>
        {benefits.map((benefit, index) => (
          <p key={index}>{benefit}</p>
        ))}
      </div>
      <button className="joinBtn">Join now</button>
    </div>
  );
};

export default Card;
