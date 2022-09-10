import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router";
function CancelButton() {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/");
  };
  return (
    <Button variant="outline-dark" size="lg" onClick={navigateTo}>
      Cancel
    </Button>
  );
}

export default CancelButton;
