import React from "react";
import Navbar from "../Navbar";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Product from "../../pages/Product/index";
import Order from "../../pages/Order/index";
import Cart from "../../pages/Cart/index";
import  ProductImage  from "../../pages/productImages/index";
import  LineItem  from "../../pages/lineItem/index";

const MainContent = (props) => {
  const { loginStatus, loginCbHandler } = props;

  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid">
          <Navbar
            loginStatus={loginStatus}
            loginCbHandler={loginCbHandler}
          ></Navbar>
        </div>
        <div className="container-fluid">
          <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/product" element={<Product></Product>}></Route>
            <Route path="/order" element={<Order></Order>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route
              path="/productImage"
              element={<ProductImage></ProductImage>}
            ></Route>
            <Route path="/lineItem" element={<LineItem></LineItem>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default MainContent;
