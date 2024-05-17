import React from "react";
import "../Styles/NavProfile.css"


const Input = (props) => {
    const {type, placeholder, value, className} = props
  return <input type={type} className={className} placeholder={placeholder} value={value}/>
};

export default Input;
