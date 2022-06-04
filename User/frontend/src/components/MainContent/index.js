import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarAfterLogin from "../Navbar/NavbarAfterLogin";
import Order from "../../pages/Order/Order";
import DetailProduct from "../../pages/Product/DetailProduct";
import Product from "../../pages/Product/product";
import Profile from "../../pages/Profile/Profile";
import ShoppingCart from "../../pages/Shopping_Cart/ShoppingCart";

function MainPageAfterLogin(props) {
  const { loginStatus, loginCbHandler } = props;
  return (
    <>
      <NavbarAfterLogin
        loginStatus={loginStatus}
        loginCbHandler={loginCbHandler}
      ></NavbarAfterLogin>
      <Routes>
        <Route path="" element={<Product></Product>}>
          <Route path="detail">
            <Route path=":id" element={<DetailProduct></DetailProduct>}></Route>
          </Route>
        </Route>

        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/order" element={<Order></Order>}></Route>
        <Route
          path="/shopping_cart"
          element={<ShoppingCart></ShoppingCart>}
        ></Route>
      </Routes>
    </>
  );
}

export default MainPageAfterLogin;
