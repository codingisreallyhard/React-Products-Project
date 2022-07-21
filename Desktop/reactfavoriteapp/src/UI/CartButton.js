import React from "react";

import classes from "./CartButton.module.css";
const CartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.showModalHandler}>
      <span>Your Cart</span>
    </button>
  );
};

export default CartButton;
