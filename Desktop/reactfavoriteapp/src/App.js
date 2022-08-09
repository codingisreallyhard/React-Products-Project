import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import FavoritePage from "./pages/FavoritePage";
import Navigation from "./UI/Navigation";
import MainPage from "./pages/MainPage";
import Cart from "./Cart/Cart";

const data = [
  {
    id: "m1",
    category: "Reading",
    name: "Book",
    description: "A very good book",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Car",
    category: "Futuristic",
    description: "A very good car",
    price: 22.39,
  },
  {
    id: "m3",
    name: "Plane",
    category: "Mobile",
    description: "A very good plane",
    price: 19.99,
  },
  {
    id: "m4",
    category: "Mobile",
    name: "Laptop",
    description: "A very powerful laptop",
    price: 19.99,
  },
  {
    id: "m5",
    category: "Mobile",
    name: "TV",
    description: "A very expensive TV",
    price: 19.99,
  },
  {
    id: "m6",
    category: "Comfort",
    name: "Watch",
    description: "A very stylish watch",
    price: 19.99,
  },
  {
    id: "m7",
    category: "Home",
    name: "SSD",
    description: "A very big SSD",
    price: 19.99,
  },
  {
    id: "m8",
    category: "Gaming",
    name: "Monitor",
    description: "A very big monitor for gaming",
    price: 19.99,
  },
];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(data);
  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setFavorites(data);
    console.log(favorites);
  }, [favorites]);

  const menuItems = [...new Set(filteredItems.map((Val) => Val.category))];

  const filterItem = (Gaming) => {
    const newItem = data.filter((newVal) => {
      return newVal.category === Gaming;
      // comparing category for displaying data
    });
    setFilteredItems(newItem);
  };

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

      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route
          path="/products"
          element={
            <ProductsPage
              handleFavorite={handleFavorite}
              favorites={favorites}
              onAdd={onAdd}
              filteredItems={filteredItems}
              setFilteredItems={setFilteredItems}
              data={data}
              filterItem={filterItem}
              menuItems={menuItems}
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
