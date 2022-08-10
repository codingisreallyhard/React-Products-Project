import React from "react";
import FavoriteProducts from "../Favorites/FavoriteProducts";
import data from "../Products/data";

const FavoritePage = (props) => {
  const { filteredItems, favorites } = props;
  return (
    <div>
      <FavoriteProducts
        data={data}
        filteredItems={filteredItems}
        favorites={favorites}
      />
    </div>
  );
};

export default FavoritePage;
