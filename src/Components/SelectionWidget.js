import React, { useState } from "react";

function BuyNow(props) {
  const [input, setInput] = useState({ color: "", make: "", name: "" });

  const handleSubmit = () => {
    let color = document.querySelector("#color-sel").value;
    let make = document.querySelector("#make-sel").value;
    let name = document.querySelector("#nm").value;
    setInput({ color, make, name });
  };
  return (
    <div>
      <h1>Select Tent</h1>
      <div className="mb">
        <label>Color</label>
        <select name="color" id="color-sel" multiple>
          {props.props1.map((data, index) => (
            <option key={index} value={data}>
              {data}
            </option>
          ))}
        </select>
      </div>
      <div className="mb">
        <label>Make</label>
        <select name="make" id="make-sel" multiple>
          {props.props2.map((data, index) => (
            <option key={index} value={data}>
              {data}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Name</label>
        <input type="text" id="nm" />
      </div>
      <div className="mb">
        <h3>Color: {input.color}</h3>
        <h3>Make: {input.make}</h3>
        <h3>Name: {input.name}</h3>
      </div>
      <div>
        <button onClick={handleSubmit}> Submit</button>
      </div>
    </div>
  );
}

export default BuyNow;
