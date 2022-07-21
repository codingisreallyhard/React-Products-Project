import React from "react";
import Products from "../Products/Products";

const ProductsPage = (props) => {
  const { handleFavorite, favorites, onAdd } = props;
  return (
    <div>
      <Products
        handleFavorite={handleFavorite}
        favorites={favorites}
        onAdd={onAdd}
      />
    </div>
  );
};

export default ProductsPage;
