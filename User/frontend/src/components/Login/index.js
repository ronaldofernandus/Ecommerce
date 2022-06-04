import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import HomePagebeforelogin from "../../pages/HomePage/HomePagebeforelogin";
import Login from "../../pages/Login/login";
import Register from "../../pages/Register/register";

function MainPage(props) {
  const { loginStatus, loginCbHandler } = props;
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={<HomePagebeforelogin></HomePagebeforelogin>}
        ></Route>
        <Route
          path="/login"
          element={
            <Login
              loginStatus={loginStatus}
              loginCbHandler={loginCbHandler}
            ></Login>
          }
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </>
  );
}

export default MainPage;
