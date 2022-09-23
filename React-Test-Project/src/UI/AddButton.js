import { Button } from "react-bootstrap";
import React from "react";
import "../Styles/AddButton.css";
function AddButton() {
  return (
    <ul className="lis">
      <li>
        <button className="addbtn">ADD</button>
      </li>
    </ul>
  );
}

export default AddButton;
