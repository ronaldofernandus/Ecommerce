import React from "react";
import Navbar from "../Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Product from "../../pages/Product/index";
import ListProduct from "../../pages/Product/listProduct";
import AddProduct from "../../pages/Product/addProduct";
import EditProduct from "../../pages/Product/editProduct";
import Order from "../../pages/Order/index";
import OrderList from "../../pages/Order/orderList";
import Cart from "../../pages/Cart/index";
import ProductImage from "../../pages/productImages/index";
import LineItem from "../../pages/lineItem/index";

const MainContent = (props) => {
  const { loginStatus, loginCbHandler } = props;

  return (
    <>
      <div className="container-fyluid">
        <div className="container-fluid">
          <Navbar
            loginStatus={loginStatus}
            loginCbHandler={loginCbHandler}
          ></Navbar>
        </div>
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="product" element={<Product></Product>}>
              <Route path="" element={<ListProduct></ListProduct>}></Route>
              <Route path="add" element={<AddProduct></AddProduct>}></Route>
              <Route path="edit">
                <Route path=":id" element={<EditProduct></EditProduct>}></Route>
              </Route>
            </Route>
            <Route path="order" element={<Order></Order>}>
              <Route path="" element={<OrderList></OrderList>}></Route>
            </Route>
            <Route path="cart" element={<Cart></Cart>}></Route>
            <Route
              path="productImage"
              element={<ProductImage></ProductImage>}
            ></Route>
            <Route path="lineItem" element={<LineItem></LineItem>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default MainContent;
