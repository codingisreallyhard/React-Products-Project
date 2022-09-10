import React from "react";
import Button from "react-bootstrap/esm/Button";
import "../Styles/MassDeleteButton.css";
function MassDeleteButton() {
  return (
    <Button
      variant="outline-danger"
      onClick={() => console.log("Danger")}
      id="delete-product-btn"
    >
      MASS DELETE
    </Button>
  );
}

export default MassDeleteButton;
