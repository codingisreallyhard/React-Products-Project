import React from "react";
import Card from "../UI/Card";
import classes from "./Products.module.css";

const Products = (props) => {
  const { favorites, handleFavorite, onAdd } = props;
  return (
    <div>
      {favorites.map((item, i) => (
        <Card key={i} className={classes.card}>
          <ul className={classes.meals}>
            <li className={classes.li}>
              <div>{item.name} </div>
              <div>{item.description}</div>
              <div>{item.price}</div>
              <div>
                <button onClick={() => handleFavorite(item.id)}>
                  {item.favorite === true
                    ? "Remove from Favorites"
                    : "Add to Favorites"}
                </button>
                <button onClick={() => onAdd(item)}>Add to cart</button>
              </div>
            </li>
          </ul>
        </Card>
      ))}
    </div>
  );
};

export default Products;
