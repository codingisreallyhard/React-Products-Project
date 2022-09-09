import React from "react";

function Furniture() {
  return (
    <>
      <div className="divcontainer">
        <label>Height</label>

        <input
          type="number"
          placeholder="Height in CM"
          id="height"
          required
        ></input>
      </div>
      <div className="divcontainer">
        <label>Width</label>
        <input
          type="number"
          placeholder=" Width in CM"
          id="width"
          required
        ></input>
      </div>
      <div className="divcontainer">
        <label>Length</label>
        <input
          type="number"
          placeholder="Length in CM"
          id="length"
          required
        ></input>
      </div>
      <p className="typeclass">Please, provide dimensions</p>
    </>
  );
}

export default Furniture;
