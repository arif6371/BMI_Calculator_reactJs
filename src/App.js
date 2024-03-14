import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  //logic
  let calcBmi = (e) => {
    e.preventDefault();

    // Convert height from inches to meters (1 inch = 0.0254 meters)
    let heightInMeters = height * 0.0254;
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      // Determine weight category
      if (bmi < 25) {
        setMessage("Underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("Normal weight");
      } else {
        setMessage("Overweight");
      }
    }
  };

  // Reload function
  let reload = () => {
    window.location.reload();
  };
  return (
    <div className="App">
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>weight(ibs)</label>
            <input
              type="text"
              placeholder="Enter Weight Value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height(in)</label>
            <input
              type="text"
              placeholder="Enter height Value"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is:{bmi} </h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
