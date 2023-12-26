import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import ProductAdd from "./pages/ProductAdd/ProductAdd";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductDelete from "./pages/ProductDelete/ProductDelete";


export default function App() {
  return <>

    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>;
        <Route path="/products" element={<Products />}></Route>;
        <Route path="/products/add" element={<ProductAdd />} />
        <Route path="/products/detail/:id" element={<ProductDetail />} />
        <Route path="/products/delete/:id" element={<ProductDelete />} />
        <Route path="*" element={<div>Not Found</div>}></Route>;
      </Routes>

    </BrowserRouter>
  </>
}
