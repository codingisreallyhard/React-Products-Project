import React from "react";
import Card from "../UI/Card";
import classes from "./Products.module.css";
import styles from "../Cart/backup/Global.module.css";

const Products = (props) => {
  const { favorites, handleFavorite, onAdd } = props;
  return (
    <div className={classes.gridcontainer}>
      {favorites.map((item, i) => (
        <Card key={i} className={styles["pricing-plan--complete"]}>
          <div>
            <div className={classes.imgBox}>
              <img
                src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png"
                alt="mouse corsair"
                className={classes.mouse}
              />
            </div>

            <div class="contentBox">
              <h3 className={classes.h3bordertop}>{item.name}</h3>
              <h2 class="price">{item.price}$</h2>
            </div>
          </div>
          <button
            className={styles["my-button"]}
            onClick={() => handleFavorite(item.id)}
          >
            {item.favorite === true
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
          <button className={styles["my-button"]} onClick={() => onAdd(item)}>
            Add to cart
          </button>
        </Card>
      ))}
    </div>
  );
};

export default Products;

function handleFavorite(id) {
  const newFavorites = favorites.map((item) => {
    return item.id === id ? { ...item, favorite: true } : item;
  });
  setFavorites(newFavorites);
}

function handleFavorite(id) {
  const newFavorites = filteredItems.map((item) => {
    return item.id === id ? { ...item, favorite: !item.favorite } : item;
  });
  setFilteredItems(newFavorites);
  console.log(filteredItems);
}

const handleFavorite = ({ id }) => {
  setFavorites((prevChecked) => {
    return prevChecked.map((item) => {
      if (item.id === id) {
        item.favorite = true;
      }
      return item;
    });
  });
};



<button
className={styles["my-button"]}
onClick={() =>
  handleFavorite({ ...item, favorite: item.favorite })
}
>




function handleFavorite(id) {
    const newFavorites = favorites.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
    console.log(favorites);
  }