import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Products.module.css";
import styles from "../Cart/backup/Global.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import Buttons from "./Buttons";

const Products = (props) => {
  const {
    favorites,
    handleFavorite,
    onAdd,
    setFilteredItems,
    filteredItems,
    data,
    filterItem,
    menuItems,
  } = props;

  return (
    <div className={classes.gridcontainer}>
      <Buttons
        menuItems={menuItems}
        setFilteredItems={setFilteredItems}
        data={data}
        filterItem={filterItem}
      />

      {filteredItems.map((item, i) => (
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
          <div className={classes.flexbuttons}>
            <button
              className={styles["my-button"]}
              onClick={() => handleFavorite(item.id)}
            >
              {item.favorite === true ? <MdFavorite /> : <GrFavorite />}
            </button>
            <button className={styles["my-button"]} onClick={() => onAdd(item)}>
              <BsFillCartCheckFill />
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Products;
