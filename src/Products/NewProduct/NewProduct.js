import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "../../Inputs/Book";
import Furniture from "../../Inputs/Furniture";
import DVD from "../../Inputs/DVD";
import "../../Styles/NewProduct.css";
import SaveButton from "../../UI/SaveButton";
import CancelButton from "../../UI/CancelButton";
import { useNavigate } from "react-router";

function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [type, setType] = useState("typeswitcher");
  const [book, setBook] = useState(false);
  const [furniture, setFurniture] = useState(false);
  const [dvd, setDvd] = useState(false);
  const [required, isRequired] = useState();

  useEffect(() => {
    type === "dvd" ? setDvd(true) : setDvd(false);
    type === "book" ? setBook(true) : setBook(false);
    type === "furniture" ? setFurniture(true) : setFurniture(false);
  }, [type]);
  const navigate = useNavigate();

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
    navigate("/");
  };

  return (
    <>
      <form onSubmit={submitHandler} id="product_form">
        <div>
          <div className="container containeraddproduct mt-4">
            <div className="headercontainer">
              <div className="hcontainer">
                <h1>Product Add</h1>
              </div>
              <div className="buttonscontainer">
                <button className="myButton" onSubmit={submitHandler}>
                  Save{" "}
                </button>
                <CancelButton />
              </div>
            </div>
            <div className="formcontainer">
              <div>
                <div className="divcontainer">
                  <label>SKU </label>
                  <input
                    type="text"
                    name="SKU"
                    onChange={handleChange}
                    required
                    placeholder="#sku"
                  />
                </div>
                <div className="divcontainer">
                  <label>Name </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    required
                    placeholder="#name"
                  />
                </div>
                <div className="divcontainer">
                  <label>Price($) </label>
                  <input
                    type="text"
                    name="price"
                    onChange={handleChange}
                    required
                    placeholder="#price"
                  />
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
                  {book && (
                    <>
                      <div className="divcontainer">
                        <label>KG</label>
                        <input
                          type="text"
                          placeholder="Weight in KG"
                          id="weight"
                          required
                          onChange={handleChange}
                          name="weight"
                        ></input>
                      </div>
                      <p className="typeclass">Please, provide weight</p>
                    </>
                  )}
                  {furniture && (
                    <>
                      <div className="divcontainer">
                        <label>Height</label>

                        <input
                          type="number"
                          placeholder="Height in CM"
                          id="height"
                          required
                          name="Height"
                          onChange={handleChange}
                        ></input>
                      </div>
                      <div className="divcontainer">
                        <label>Width</label>
                        <input
                          type="number"
                          placeholder=" Width in CM"
                          id="width"
                          required
                          name="Width"
                          onChange={handleChange}
                        ></input>
                      </div>
                      <div className="divcontainer">
                        <label>Length</label>
                        <input
                          type="number"
                          placeholder="Length in CM"
                          id="length"
                          required
                          name="Length"
                          onChange={handleChange}
                        ></input>
                      </div>
                      <p className="typeclass">Please, provide dimensions</p>
                    </>
                  )}
                  {dvd && (
                    <>
                      <div className="divcontainer">
                        <label>MB</label>
                        <input
                          type="text"
                          placeholder="Size in MB"
                          id="size"
                          required
                          name="MB"
                          onChange={handleChange}
                        ></input>
                      </div>
                      <p className="typeclass">Please, provide size</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footercontainer">
          <footer className="addproductfooter">
            ScandiWeb Test assignment
          </footer>
        </div>
      </form>
    </>
  );
}

export default NewProduct;
