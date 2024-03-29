import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Model from "./component/Model";
import CartSideBar from "./component/CartSideBar";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);
  const CartSideBarToggle = () => {
    setShowCart(!showCart);
  };
  return (
    <div className=" ">
      {showCart ? <CartSideBar CartSideBarToggle={CartSideBarToggle} /> : ""}

      <Navbar CartSideBarToggle={CartSideBarToggle} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
