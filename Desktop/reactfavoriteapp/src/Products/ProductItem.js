import React from "react";

const ProductItem = (props) => {
  const { data } = props;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default ProductItem;
