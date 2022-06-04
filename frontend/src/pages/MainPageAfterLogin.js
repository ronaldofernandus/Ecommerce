import React from "react";
import { Routes, Route } from "react-router-dom";

import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Order from "./Order/Order";
import DetailProduct from "./Product/DetailProduct";
import Product from "./Product/product";
import Profile from "./Profile/Profile";
import ShoppingCart from "./Shopping_Cart/ShoppingCart";


const MainPageAfterLogin = (props) => {
  const { loginStatus, loginCbHandler } = props;

  
  return (
    <>
      <NavbarAfterLogin loginStatus={loginStatus} loginCbHandler={loginCbHandler} ></NavbarAfterLogin>
      <Routes>
        <Route path="" >
          <Route path="" element={<Product></Product>}></Route>
          <Route path="/detail">
            <Route path=":id" element={<DetailProduct></DetailProduct>}></Route>
          </Route>
        </Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/order" element={<Order></Order>}></Route>
        <Route
          path="/shopping_cart" element={<ShoppingCart></ShoppingCart>}></Route>
      </Routes>
    </>
  );
}

export default MainPageAfterLogin;