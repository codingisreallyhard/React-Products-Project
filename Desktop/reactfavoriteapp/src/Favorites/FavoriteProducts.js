import React, { useEffect, useState } from "react";

const FavoriteProducts = (props) => {
  const { filteredItems, favorites } = props;

  return (
    <div className="App">
      <h1>Favorite list</h1>
      <ul>
        {favorites.map((item, i) =>
          item.favorite === true ? <div key={i}>{item.name}</div> : null
        )}
      </ul>
    </div>
  );
};
export default FavoriteProducts;
