import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "../../Inputs/Book";
import Furniture from "../../Inputs/Furniture";
import DVD from "../../Inputs/DVD";
import "../../Styles/NewProduct.css";
import SaveButton from "../../UI/SaveButton";
import CancelButton from "../../UI/CancelButton";

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
      <div className='headercontainer'>
      <div className="hcontainer">
        <h1>Product Add</h1>
      </div>
      <div class="buttonscontainer">
        <SaveButton />
        <CancelButton />
      </div>
      </div>
      <div className="formcontainer">
        <form onSubmit={submitHandler} id="product_form">
          <div>
            <div className="divcontainer">
              <label>SKU </label>
              <input type="text" name="SKU" onChange={handleChange} required />
            </div>
            <div className="divcontainer">
              <label>Name </label>
              <input type="text" name="SKU" onChange={handleChange} required />
            </div>
            <div className="divcontainer">
              <label>Price($) </label>
              <input type="text" name="SKU" onChange={handleChange} required />
            </div>

            <div className="divcontainer typeswitchcontainer ">
              <h6 className="smallswitchtype">Type Switcher</h6>
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
            </div>
            <div>
              {book && <Book />}
              {furniture && <Furniture />}
              {dvd && <DVD />}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProduct;
