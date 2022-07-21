import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import FavoritePage from "./pages/FavoritePage";
import Navigation from "./UI/Navigation";
import MainPage from "./pages/MainPage";
import Cart from "./Cart/Cart";

const data = [
  { id: "m1", name: "Book", description: "A very good book" },
  { id: "m2", name: "Car", description: "A very good car" },
  { id: "m3", name: "Plane", description: "A very good plane" },
];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

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
        <Navigation showModalHandler={showModalHandler} />
      </nav>
      {showModal && <Cart onClose={hideModalHandler} />}
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
