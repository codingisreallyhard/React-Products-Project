import React, { useEffect, useState } from "react";

const FavoriteProducts = (props) => {
  const { favorites } = props;

  return (
    <div className="App">
      <h1>Favorite list</h1>
      <ul>
        {favorites.map((item) =>
          item.favorite === true ? <li key={item.id}>{item.name}</li> : null
        )}
      </ul>
    </div>
  );
};
export default FavoriteProducts;
