import React from "react";
import Products from "../Products/Products";

const ProductsPage = (props) => {
  const { handleFavorite, favorites } = props;
  return (
    <div>
      <Products handleFavorite={handleFavorite} favorites={favorites} />
    </div>
  );
};

export default ProductsPage;
