import Header from "./components/headerPage/header";
import Home from "./pages/homePage/home";
import Footer from "./components/Footer/Footer";
import Product from "./pages/productPage/product";
import Detail from "./components/homeComponent/detail";
import Cart from "./pages/cartPage/Cart";
import Wish from "./pages/wishListPage/wish";
import NotFound from "./pages/notFoundPage/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wish />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
