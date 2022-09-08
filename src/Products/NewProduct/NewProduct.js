import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "../../Inputs/Book";
import Furniture from "../../Inputs/Furniture";
import DVD from "../../Inputs/DVD";
import "../../Styles/NewProduct.css";

function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [type, setType] = useState("typeswitcher");
  const [book, setBook] = useState(false);
  const [furniture, setFurniture] = useState(false);
  const [dvd, setDvd] = useState(false);

  useEffect(() => {
    type === "dvd" ? setDvd(true) : setDvd(false);
    type === "book" ? setBook(true) : setBook(false);
    type === "furniture" ? setFurniture(true) : setFurniture(false);
  }, [type]);

  const handleTypeOnChange = (e) => {
    setType(e.target.value);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios.post("http://localhost:8888/api/", inputs);
  };

  return (
    <div className="container containeraddproduct mt-4">
      <div>
        <h1>Product Add</h1>
      </div>
      <div className="formcontainer">
        <form onSubmit={submitHandler} id="product_form">
          <table cellSpacing="10">
            <tbody>
              <tr>
                <th>
                  <label>SKU </label>
                </th>
                <td>
                  <input type="text" name="SKU" onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Name </label>
                </th>
                <td>
                  <input type="text" name="name" onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Price($) </label>
                </th>
                <td>
                  <input type="text" name="price" onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Type Switcher </label>
                </th>
                <td>
                  <select
                    id="productType"
                    value={type}
                    onChange={handleTypeOnChange}
                  >
                    <option value="typeswitcher">Type Switcher</option>
                    <option id="DVD" value="dvd">
                      DVD
                    </option>
                    <option id="Furniture" value="book">
                      Book
                    </option>
                    <option id="Book" value="furniture">
                      Furniture
                    </option>
                  </select>
                </td>
              </tr>
              <tr className="switchercontainer">
                <td>
                  {book && <Book />}
                  {furniture && <Furniture />}
                  {dvd && <DVD />}
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="right">
                  <button>Save</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default NewProduct;
