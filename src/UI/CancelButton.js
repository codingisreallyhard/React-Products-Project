import React from "react";

import { useNavigate } from "react-router";
import "../Styles/Buttons.css";
function CancelButton() {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/");
  };
  return (
    <button className="cancel-btn" onClick={navigateTo}>
      Cancel
    </button>
  );
}

export default CancelButton;
