import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import FavoritePage from "./pages/FavoritePage";
import Navigation from "./UI/Navigation";
import MainPage from "./pages/MainPage";
import Cart from "./Cart/Cart";
import Filter from "./Products/Filter";

const data = [
  { id: "m1", name: "Book", description: "A very good book", price: 22.99 },
  { id: "m2", name: "Car", description: "A very good car", price: 22.39 },
  { id: "m3", name: "Plane", description: "A very good plane", price: 19.99 },
  {
    id: "m4",
    name: "Laptop",
    description: "A very powerful laptop",
    price: 19.99,
  },
  {
    id: "m5",
    name: "TV",
    description: "A very expensive TV",
    price: 19.99,
  },
  {
    id: "m6",
    name: "Watch",
    description: "A very stylish watch",
    price: 19.99,
  },
  {
    id: "m7",
    name: "SSD",
    description: "A very big SSD",
    price: 19.99,
  },
  {
    id: "m8",
    name: "Monitor",
    description: "A very big monitor for gaming",
    price: 19.99,
  },
];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    dataFetch();
  }, []);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
      "X-RapidAPI-Host": "datagram-products-v1.p.rapidapi.com",
    },
  };

  const dataFetch = () => {
    fetch("https://datagram-products-v1.p.rapidapi.com/test", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
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

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  function handleFavorite(id) {
    const newFavorites = favorites.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });
    setFavorites(newFavorites);
  }

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <section>
      <nav>
        <Navigation showModalHandler={showModalHandler} />
      </nav>
      {showModal && (
        <Cart
          onClose={hideModalHandler}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      )}
      <Filter cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route
          path="/products"
          element={
            <ProductsPage
              handleFavorite={handleFavorite}
              favorites={favorites}
              onAdd={onAdd}
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
