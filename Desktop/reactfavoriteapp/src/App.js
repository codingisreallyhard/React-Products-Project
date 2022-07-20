import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import FavoritePage from "./pages/FavoritePage";
import Navigation from "./UI/Navigation";
import MainPage from "./pages/MainPage";

const data = [
  { id: "m1", name: "Book", description: "A very good book" },
  { id: "m2", name: "Car", description: "A very good car" },
  { id: "m3", name: "Plane", description: "A very good plane" },
];

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(data);
  }, []);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  function handleFavorite(id) {
    const newFavorites = favorites.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });
    setFavorites(newFavorites);
  }

  return (
    <section>
      <nav>
        <Navigation />
      </nav>

      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route
          path="/products"
          element={
            <ProductsPage
              handleFavorite={handleFavorite}
              favorites={favorites}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={<FavoritePage favorites={favorites} />}
        ></Route>
      </Routes>
    </section>
  );
}

export default App;
