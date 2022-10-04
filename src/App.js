import { Route, Routes } from "react-router";
import "../src/Styles/App.css";
import AddProductPage from "./pages/AddProductPage";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/add-product" element={<AddProductPage />} />
    </Routes>
  );
}

export default App;
