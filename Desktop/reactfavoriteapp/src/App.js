import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import FavoritePage from "./pages/FavoritePage";
import Navigation from "./UI/Navigation";
import MainPage from "./pages/MainPage";
import Cart from "./Cart/Cart";

// const data = [
//   {
//     id: "m1",
//     category: "Reading",
//     name: "Book",
//     description: "A very good book",
//     price: 22.99,
//     favorite: false,
//     image: "tv1.png",
//   },
//   {
//     id: "m2",
//     name: "Car",
//     category: "Futuristic",
//     description: "A very good car",
//     price: 22.39,
//     favorite: false,
//   },
//   {
//     id: "m3",
//     name: "Plane",
//     category: "Mobile",
//     description: "A very good plane",
//     price: 19.99,
//     favorite: false,
//     image: "laptop.png",
//   },
//   {
//     id: "m4",
//     category: "Mobile",
//     name: "Televizor OLED Smart PANASONIC TX-55JZ1000E, Ultra HD 4K, HDR 10+, 139cm",
//     description:
//       "Televizor OLED Smart PANASONIC TX-55JZ1000E, Ultra HD 4K, HDR 10+, 139cm",
//     price: 19.99,
//     favorite: false,
//     image: "tv3.png",
//   },
//   {
//     id: "m5",
//     category: "Mobile",
//     name: "TV",
//     description: "A very expensive TV",
//     price: 19.99,
//     favorite: false,
//   },
//   {
//     id: "m6",
//     category: "Comfort",
//     name: "Watch",
//     description: "A very stylish watch",
//     price: 19.99,
//     favorite: false,
//   },
//   {
//     id: "m7",
//     category: "Home",
//     name: "SSD",
//     description: "A very big SSD",
//     price: 19.99,
//     favorite: false,
//   },
//   {
//     id: "m8",
//     category: "Gaming",
//     name: "Monitor",
//     description: "A very big monitor for gaming",
//     price: 19.99,
//     favorite: false,
//   },
// ];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://reactcartapp-b4204-default-rtdb.firebaseio.com/Products.json"
      );
      const responseData = await response.json();
      const data = [];
      for (const key in responseData) {
        data.push({
          id: key,
          name: responseData[key].name,
          category: responseData[key].category,
          price: responseData[key].price,
          favorite: responseData[key].favorite,
        });
      }

      setFilteredItems(data);
      setFavorites(data);
    };
    fetchProducts();
  }, []);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setFavorites(filteredItems);
    console.log(favorites);
  }, [favorites]);

  const menuItems = [...new Set(filteredItems.map((Val) => Val.category))];

  const filterItem = (Gaming) => {
    const newItem = filteredItems.filter((newVal) => {
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
    console.log(favorites);
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
              data={filteredItems}
              filterItem={filterItem}
              menuItems={menuItems}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <FavoritePage filteredItems={filteredItems} favorites={favorites} />
          }
        ></Route>
      </Routes>
    </section>
  );
}

export default App;
