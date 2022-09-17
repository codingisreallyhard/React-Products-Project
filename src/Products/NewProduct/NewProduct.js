import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../../Styles/NewProduct.css";

import CancelButton from "../../UI/CancelButton";
import { useNavigate } from "react-router";

function NewProduct() {
  const [inputs, setInputs] = useState({
    name: "",
    sku: "",
    price: 0,
    kg: 0,
    mb: 0,
    width: 0,
    length: 0,
    height: 0,
  });

  const [type, setType] = useState("typeswitcher");
  const [book, setBook] = useState(false);
  const [furniture, setFurniture] = useState(false);
  const [dvd, setDvd] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      sku: "",
      name: "",
      price: 0,
    },
  });

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
    event.persist();
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const submitHandler = (event) => {
    // event.preventDefault();
    console.log(inputs);
    const data = event;
    axios
      .post("http://localhost:3001/create", {
        name: data.name,
        sku: data.sku,
        price: data.price,
        kg: data.kg,
        mb: data.mb,
        width: data.width,
        height: data.height,
        length: data.length,
      })
      .then(() => {
        console.log("Added");
      });
    console.log(data.name);
    console.log(data);
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)} id="product_form">
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
                    // value={inputs.sku}
                    type="text"
                    name="sku"
                    onChange={handleChange}
                    placeholder="#sku"
                    {...register("sku", {
                      required: "Please, submit required data",
                    })}
                  />
                </div>
                {errors.sku2 && (
                  <div className="validationerror">{errors.sku.message}</div>
                )}
                <div className="divcontainer">
                  <label>Name </label>
                  <input
                    // defaultValue={}
                    // value={inputs.name}
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="#name"
                    {...register("name", {
                      required: "Please, submit required data",
                    })}
                  />
                </div>
                {errors.name && (
                  <div className="validationerror">{errors.name.message}</div>
                )}
                <div className="divcontainer">
                  <label>Price($) </label>
                  <input
                    // value={inputs.price}
                    type="text"
                    name="price"
                    onChange={handleChange}
                    placeholder="#price"
                    {...register("price", {
                      required: "Please, submit required data",
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Please, provide the data of indicated type",
                      },
                    })}
                  />
                </div>
                {errors.price && (
                  <div className="validationerror">{errors.price.message}</div>
                )}
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
                    <div>
                      <div className="divcontainer">
                        <label>KG</label>
                        <input
                          // value={inputs.kg}
                          type="number"
                          placeholder="Weight in KG"
                          id="kg"
                          onChange={handleChange}
                          name="kg"
                          {...register("kg", {
                            required: "Please, submit required data",
                            pattern: {
                              value: /^[0-9]*$/,
                              message:
                                "Please, provide the data of indicated type",
                            },
                          })}
                        ></input>
                      </div>
                      {errors.kg && (
                        <div className="validationerror">
                          {errors.kg.message}
                        </div>
                      )}

                      <p className="typeclass">Please, provide weight</p>
                    </div>
                  )}
                  {furniture && (
                    <>
                      <div className="divcontainer">
                        <label>Height</label>

                        <input
                          // value={inputs.height}
                          type="number"
                          placeholder="Height in CM"
                          id="height"
                          name="height"
                          onChange={handleChange}
                          {...register("height", {
                            required: "Please, submit required data",
                            pattern: {
                              value: /^[0-9]*$/,
                              message:
                                "Please, provide the data of indicated type",
                            },
                          })}
                        ></input>
                      </div>
                      {errors.height && (
                        <div className="validationerror">
                          {errors.height.message}
                        </div>
                      )}
                      <div className="divcontainer">
                        <label>Width</label>
                        <input
                          // value={inputs.width}
                          type="number"
                          placeholder=" Width in CM"
                          id="width"
                          name="width"
                          onChange={handleChange}
                          {...register("width", {
                            required: "Please, submit required data",
                            pattern: {
                              value: /^[0-9]*$/,
                              message:
                                "Please, provide the data of indicated type",
                            },
                          })}
                        ></input>
                      </div>
                      {errors.width && (
                        <div className="validationerror">
                          {errors.width.message}
                        </div>
                      )}
                      <div className="divcontainer">
                        <label>Length</label>
                        <input
                          // value={inputs.length}
                          type="number"
                          placeholder="Length in CM"
                          id="length"
                          name="length"
                          onChange={handleChange}
                          {...register("length", {
                            required: "Please, submit required data",
                            pattern: {
                              value: /^[0-9]*$/,
                              message:
                                "Please, provide the data of indicated type",
                            },
                          })}
                        ></input>
                      </div>
                      {errors.length && (
                        <div className="validationerror">
                          {errors.length.message}
                        </div>
                      )}
                      <p className="typeclass">Please, provide dimensions</p>
                    </>
                  )}
                  {dvd && (
                    <>
                      <div className="divcontainer">
                        <label>MB</label>
                        <input
                          // value={inputs.mb}
                          type="number"
                          placeholder="Size in MB"
                          id="size"
                          name="mb"
                          onChange={handleChange}
                          {...register("mb", {
                            required: "Please, submit required data",
                            pattern: {
                              value: /^[0-9]*$/,
                              message:
                                "Please, provide the data of indicated type",
                            },
                          })}
                        ></input>
                      </div>
                      {errors.mb && (
                        <div className="validationerror">
                          {errors.mb.message}
                        </div>
                      )}
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
