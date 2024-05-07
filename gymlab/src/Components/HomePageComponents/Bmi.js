import React, {useEffect, useState} from "react";
import "../../Styles/HomePageStyles/Bmi.css";

const Bmi = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmi, setBmi] = useState(0);


    useEffect(() => {
        if (!(isNaN(parseFloat(height)) || isNaN(parseInt(weight)) && height > 0  && weight > 0)) {
            let heightMeters = parseFloat(height) / 100;
            let bmi = Math.round((parseInt(weight) / (heightMeters * heightMeters))*10)/10;
            setBmi(bmi);
        }

    }, [height, weight]);


    const handleChange = (e) =>
    {
        console.log(height)
        e.target.name == "height" ? setHeight(e.target.value) : setWeight(e.target.value)
    }

  return (
    <div className="bmiContainer">
      <h1 className="">Calculate Your BMI</h1>
      <label htmlFor="height">Height</label>
      <input name="height" type="number" onChange={handleChange}/>
        <br/>
      <label htmlFor="weight">Weight</label>
      <input name="weight" type="number" onChange={handleChange}/>

    <h2 name="bmiOutput">{(isNaN(bmi) || bmi == 0) ? "BMI" : bmi}</h2>
    </div>
  );
};

export default Bmi;
