import React from "react";
import AddButton from "../../UI/AddButton";
import MassDeleteButton from "../../UI/MassDeleteButton";
import "../../Styles/ProductsList.css";
function ProductsList() {
  return (
    <div>
      <div className="containerflex">
        <h1>Product List</h1>
        <AddButton /> <MassDeleteButton />
      </div>
      <div></div>
    </div>
  );
}

export default ProductsList;
