import React from "react";
import { useNavigate } from "react-router";
import "../Styles/Buttons.css";
function AddButton() {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/add-product");
  };
  return (
    <button className="addbtn" onClick={navigateTo}>
      ADD
    </button>
  );
}

export default AddButton;
