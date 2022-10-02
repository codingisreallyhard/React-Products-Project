import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../../Styles/NewProduct.css";
import CancelButton from "../../UI/CancelButton";
import { useNavigate } from "react-router";
import Footer from "../../UI/Footer";

function NewProduct() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
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
      price: "",
    },
  });

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
                  <label className="label__title">SKU</label>
                  <label className="input">
                    <input
                      className="input__field"
                      type="text"
                      name="sku"
                      onChange={handleChange}
                      placeholder=" "
                      {...register("sku", {
                        required: "Please, submit required data",
                      })}
                    />
                    <span className="input__label">Please enter SKU</span>
                  </label>
                </div>

                {errors.sku && (
                  <div className="validationerror">{errors.sku.message}</div>
                )}
                <div className="divcontainer">
                  <label className="label__title">Name </label>
                  <label className="input">
                    <input
                      className="input__field"
                      type="text"
                      name="name"
                      onChange={handleChange}
                      placeholder=" "
                      {...register("name", {
                        required: "Please, submit required data",
                      })}
                    />
                    <span className="input__label">Please enter NAME</span>
                  </label>
                </div>
                {errors.name && (
                  <div className="validationerror">{errors.name.message}</div>
                )}
                <div className="divcontainer">
                  <label className="label__title">Price($) </label>
                  <label className="input">
                    <input
                      className="input__field"
                      type="text"
                      name="price"
                      onChange={handleChange}
                      placeholder=" "
                      {...register("price", {
                        required: "Please, submit required data",
                        pattern: {
                          value: /^[0-9]*$/,
                          message: "Please, provide the data of indicated type",
                        },
                      })}
                    />
                    <span className="input__label">Please enter PRICE</span>
                  </label>
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
                    className="typeswitcher"
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
                        <label className="label__title">KG</label>
                        <label className="input">
                          <input
                            className="input__field"
                            type="text"
                            placeholder=" "
                            id="weight"
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
                          <span className="input__label">
                            Please enter WEIGHT
                          </span>
                        </label>
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
                        <label className="label__title">Height</label>
                        <label className="input">
                          <input
                            className="input__field"
                            type="text"
                            placeholder=" "
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
                          <span className="input__label">
                            Please enter HEIGHT
                          </span>
                        </label>
                      </div>
                      {errors.height && (
                        <div className="validationerror">
                          {errors.height.message}
                        </div>
                      )}
                      <div className="divcontainer">
                        <label className="label__title">Width</label>
                        <label className="input">
                          <input
                            className="input__field"
                            type="text"
                            placeholder=" "
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
                          <span className="input__label">
                            Please enter WIDTH
                          </span>
                        </label>
                      </div>
                      {errors.width && (
                        <div className="validationerror">
                          {errors.width.message}
                        </div>
                      )}
                      <div className="divcontainer">
                        <label className="label__title">Length</label>
                        <label className="input">
                          <input
                            className="input__field"
                            type="text"
                            placeholder=" "
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
                          />
                          <span className="input__label">
                            Please enter LENGTH
                          </span>
                        </label>
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
                        <label className="label__title">MB</label>
                        <label className="input">
                          <input
                            className="input__field"
                            type="text"
                            placeholder=" "
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
                          <span className="input__label">
                            Please enter SIZE
                          </span>
                        </label>
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
        <Footer />
      </form>
    </>
  );
}

export default NewProduct;
