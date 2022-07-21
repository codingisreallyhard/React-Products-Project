import React from "react";
import Card from "../UI/Card";
import data from "./data";
import ProductItem from "./ProductItem";

const Products = (props) => {
  const { favorites, handleFavorite } = props;
  return (
    <div>
      {favorites.map((item, i) => (
        <Card>
          <li key={i}>
            {item.name} {item.description}
            <button onClick={() => handleFavorite(item.id)}>
              {item.favorite === true
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </button>
          </li>
        </Card>
      ))}
    </div>
  );
};

export default Products;
