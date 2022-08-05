import React from "react";
import Products from "../Products/Products";
import classes from "./ProductsPage.module.css";

const ProductsPage = (props) => {
  const { handleFavorite, favorites, onAdd } = props;
  return (
    <div className={classes.containergridrows}>
      <Products
        handleFavorite={handleFavorite}
        favorites={favorites}
        onAdd={onAdd}
      />
    </div>
  );
};

export default ProductsPage;
