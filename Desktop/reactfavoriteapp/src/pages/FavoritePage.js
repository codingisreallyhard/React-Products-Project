import React from "react";
import FavoriteProducts from "../Favorites/FavoriteProducts";
import data from "../Products/data";

const FavoritePage = (props) => {
  const { favorites } = props;
  return (
    <div>
      <FavoriteProducts data={data} favorites={favorites} />
    </div>
  );
};

export default FavoritePage;
