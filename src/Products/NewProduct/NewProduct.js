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
                  <label>SKU </label>
                  <input
                    type="text"
                    name="sku"
                    onChange={handleChange}
                    placeholder="#sku"
                    {...register("sku", {
                      required: "Please, submit required data",
                    })}
                  />
                </div>
                {errors.sku && (
                  <div className="validationerror">{errors.sku.message}</div>
                )}
                <div className="divcontainer">
                  <label>Name </label>
                  <input
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
                          type="text"
                          placeholder="Weight in KG"
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
                          type="text"
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
                          type="text"
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
                          type="text"
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
                        />
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
                          type="text"
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
        <Footer />
      </form>
    </>
  );
}

export default NewProduct;
