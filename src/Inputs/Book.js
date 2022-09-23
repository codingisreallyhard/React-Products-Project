import React, { useState } from "react";

function Book(props) {
  console.log(props);

  return (
    <>
      <div className="divcontainer">
        <label>KG</label>
        <input
          type="text"
          placeholder="Weight in KG"
          id="weight"
          required
          onChange={(event) => props.onChange(event.target.value)}
          name="weight"
        ></input>
      </div>
      <p className="typeclass">Please, provide weight</p>
    </>
  );
}

export default Book;
