import React, { useState } from "react";
import AddButton from "../../UI/AddButton";
import MassDeleteButton from "../../UI/MassDeleteButton";
import "../../Styles/ProductsList.css";
function ProductsList() {
  const [data, setData] = useState([]);
  return (
    <>
      <div className="container productlistcontainer mt-4">
        <div className="headercontainer">
          <div className="hcontainer">
            <h1>Product List</h1>
          </div>
          <div className="buttonscontainer">
            <AddButton /> <MassDeleteButton />
          </div>
        </div>
        <div className="cardcontainer">
          <div className="cardproductlist delete-checkbox">
            {" "}
            <input type="checkbox"></input>
            Boilerplate code
          </div>
          <div className="cardproductlist delete-checkbox">
            <input type="checkbox"></input> Boilerplate code
          </div>
          <div className="cardproductlist delete-checkbox">
            <input type="checkbox"></input> Boilerplate code
          </div>
          <div className="cardproductlist delete-checkbox">
            <input type="checkbox"></input> Boilerplate code
          </div>
          <div className="cardproductlist delete-checkbox">
            <input type="checkbox"></input> Boilerplate code
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsList;
