import React, { useState } from "react";
import AddButton from "../../UI/AddButton";
import MassDeleteButton from "../../UI/MassDeleteButton";
import "../../Styles/ProductsList.css";
import { useEffect } from "react";
import axios from "axios";
function ProductsList() {
  const [data, setData] = useState([]);
  const [checked, setChecked0] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setData(response.data);
    });
  }, []);

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
          {data.map((val, key) => {
            return <div></div>;
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;

<div className="cardproductlist"></div>;

{
  /* <input type="checkbox" value={val.sku} /> */
}

{
  /* <span> {val.name}</span> */
}
{
  /* <span> {val.price}</span> */
}
//  <span>{val.sku}</span>
