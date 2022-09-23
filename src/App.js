import { Route, Routes } from "react-router";
import "../src/Styles/App.css";
import AddProductPage from "./pages/AddProductPage";
import ProductListPage from "./pages/ProductListPage";
import Navigation from "./UI/Navigation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
      </Routes>
    </>
  );
}

export default App;
