import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const { onClose, cartItems, onAdd, onRemove } = props;
  return (
    <Modal onClose={onClose}>
      <div>
        <h2>Total Amount</h2>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{item.price}</div>

            <div>
              {item.qty} x {item.price.toFixed(2)}
            </div>

            <button onClick={() => onAdd(item)}>+</button>
            <button onClick={() => onRemove(item)}>-</button>
          </div>
        ))}
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
