import React, { useEffect, useState, useRef } from "react";
import "../../Styles/HomePageStyles/Bmi.css";

const Bmi = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const bmiRef = useRef(null);

  useEffect(() => {
    if (
      !(
        isNaN(parseFloat(height)) ||
        (isNaN(parseInt(weight)) && height > 0 && weight > 0)
      )
    ) {
      let heightMeters = parseFloat(height) / 100;
      let bmi =
        Math.round((parseInt(weight) / (heightMeters * heightMeters)) * 10) /
        10;
      setBmi(bmi);
      if (!isNaN(bmi) && bmi !== Infinity && bmi !== 0) {
        if (bmi < 18.5) {
          bmiRef.current.innerText = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
          bmiRef.current.innerText = "Healthy Weight";
        } else if (bmi >= 25 && bmi < 29.9) {
          bmiRef.current.innerText = "Overweight";
        } else {
          bmiRef.current.innerText = "Obesity";
        }
      }else{
        bmiRef.current.innerText = ""
      }
    }
  }, [height, weight]);

  const handleChange = (e) => {
    e.target.name === "height"
      ? setHeight(e.target.value)
      : setWeight(e.target.value);
  };

  return (
    <div className="bmiContainer">
      <h1 className="">Calculate Your BMI</h1>
      <h4>Easily calculate your BMI with our reliable tool.</h4>
      <div className="calculatorContainer">
        <div className="inputGroup">
          <input
            name="height"
            type="number"
            onChange={handleChange}
            placeholder="Height / cm"
          />
          <input
            name="weight"
            type="number"
            onChange={handleChange}
            placeholder="Weight / kg"
          />
        </div>
        <div className="resultGroup">
        <h2 name="bmiOutput">
          {isNaN(bmi) || bmi === 0 || bmi === Infinity ? "Your BMI" : bmi}
        </h2>
        <h3 ref={bmiRef}></h3>
      </div>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/Images/bmi-dumbbell.png"}
        alt=""
        className="bmiPhoto"
      />
    </div>
  );
};

export default Bmi;
