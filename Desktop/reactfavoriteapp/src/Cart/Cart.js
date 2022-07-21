import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const { onClose } = props;
  return (
    <Modal onClose={onClose}>
      <div>
        <span>Total Amount</span>
      </div>

      <div>
        <button className={classes.buttonclose} onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
