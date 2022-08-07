import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const { onClose, cartItems, onAdd, onRemove } = props;
  const totalAmount = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  return (
    <Modal onClose={onClose} className={classes.modal}>
      <div>
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <h5 class="modal-title" id="exampleModalLabel">
              Your Shopping Cart
            </h5>
          </div>
          <div class="modal-body">
            <table className={classes.table}>
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Total</th>
                  <th scope="col" className={classes.tdactions}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className={classes.divtd}>
                  {cartItems.map((item) => (
                    <div className={classes.flexbox}>
                      <div className={classes.idk}>
                        <td className={classes.tdname}>{item.name}</td>

                        <td className={classes.tdprice}>{item.price}</td>
                        <td className={classes.tdqty}>{item.qty}</td>
                        <td className={classes.tdtotal}>
                          {(item.price * item.qty).toFixed(2)}
                        </td>

                        <td>
                          <div className={classes.tdbtn}>
                            <button
                              className={classes.tdbtnn}
                              onClick={() => onAdd(item)}
                            >
                              +
                            </button>
                            <button
                              className={classes.tdbtnn}
                              onClick={() => onRemove(item)}
                            >
                              -
                            </button>
                          </div>
                        </td>
                      </div>
                    </div>
                  ))}
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-end">
              <h5 className={classes.totalpricetot}>
                Total:{" "}
                <span class="price text-success">
                  {totalAmount.toFixed(2)}$
                </span>
              </h5>
            </div>
          </div>
          <div class="modal-footer border-top-0 d-flex justify-content-between">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-success">
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* {cartItems.map((item) => (
          <div key={item.id} className={classes.cartitems}>
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
        </button> */}
    </Modal>
  );
};

export default Cart;
