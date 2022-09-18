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
      console.log(data);
    });
  }, []);

  const deleteData = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`);
  };

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
            return (
              <div className="cardproductlist">
                <div className="valuescontainercheckbox pt-4 ml-3">
                  <input type="checkbox" value={val.sku} />
                </div>
                <div className="valuescontainer">
                  <span> {val.name}</span>
                </div>
                <div className="valuescontainer">
                  <span> {val.price}$</span>
                </div>
                <div className="valuescontainer">
                  <span>{val.sku}</span>
                </div>
                <div className="valuescontainer">
                  <span className="pb-5">
                    {val.kg}
                    {val.mb}
                    {val.width}
                    {val.height}
                    {val.length}
                  </span>
                </div>
              </div>
            );
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
