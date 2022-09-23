import React from "react";

function DVD() {
 
  return (
    <>
      <div className="divcontainer">
        <label>MB</label>
        <input
          type="text"
          placeholder="Size in MB"
          id="size"
          required
        
        ></input>
      </div>
      <p className="typeclass">Please, provide size</p>
    </>
  );
}

export default DVD;
