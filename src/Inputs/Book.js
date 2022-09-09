import React from "react";

function Book() {
  
  return (
    <>
      <div className="divcontainer">
        <label>KG</label>
        <input
          type="text"
          placeholder="Weight in KG"
          id="weight"
          required
          
        ></input>
      </div>
      <p className="typeclass">Please, provide weight</p>
    </>
  );
}

export default Book;
