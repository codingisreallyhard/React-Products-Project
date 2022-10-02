import { Route, Routes } from "react-router";
import "../src/Styles/App.css";
import AddProductPage from "./pages/AddProductPage";
import ProductListPage from "./pages/ProductListPage";
import Navigation from "./UI/Navigation";
import rubik from "@fontsource/rubik";

function App() {
  return (
    <div className="mainbg">
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
