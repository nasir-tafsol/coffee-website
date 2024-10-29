import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./components/Products/ProductDetail";
import AddCart from "./components/AddCart/AddCart";
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/add-cart" element={<AddCart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
