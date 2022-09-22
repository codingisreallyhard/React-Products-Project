import React, { useState } from "react";
import AddButton from "../../UI/AddButton";
import MassDeleteButton from "../../UI/MassDeleteButton";
import "../../Styles/ProductsList.css";
import { useEffect } from "react";
import axios from "axios";
function ProductsList() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setData(response.data);
      console.log(data);
    });
  }, []);

  // const deleteData = (sku) => {
  //   axios.delete(`http://localhost:3001/delete/${sku}`);
  // };

  // const deleteProductById = () => {
  //   products.forEach((product) => {
  //     if (product.select) {
  //       axios.delete(`http://localhost:3001/delete/`).then((res) => {
  //         console.log(res.data);
  //         getProducts();
  //       });
  //     }
  //   });
  // };

  const deleteProductById = () => {
    let sku = [];
    products.forEach((p) => {
      if (p.select) {
        sku.push(p.sku);
      }
    });
    axios.delete(`http://localhost:3001/delete/${sku}`);
    console.log(sku);
  };

  return (
    <>
      <div className="container productlistcontainer mt-4">
        <div className="headercontainer">
          <div className="hcontainer">
            <h1>Product List</h1>
          </div>
          <div className="buttonscontainer">
            <AddButton />
            <button
              onClick={() => {
                deleteProductById();
              }}
            >
              MASS DELETE
            </button>
          </div>
        </div>
        <div className="cardcontainer">
          {data.map((val, key) => {
            if (val.kg) {
              return (
                <div className="cardproductlist">
                  <div className="valuescontainercheckbox pt-4 ml-3">
                    <input
                      type="checkbox"
                      value={val.sku}
                      name={val.sku}
                      onChange={(e) => {
                        products.select = e.target.checked;
                        setProducts(products);
                        console.log(products);
                      }}
                    />
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
                      <span>Weight: {val.kg} KG</span>
                    </span>
                  </div>
                </div>
              );
            } else if (val.mb) {
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
                      <span>Size: {val.mb} MB</span>
                    </span>
                  </div>
                </div>
              );
            } else if (val.length) {
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
                      <span>
                        Dimensions: {val.length}x{val.width}x{val.height}
                      </span>
                    </span>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
