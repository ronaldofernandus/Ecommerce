import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomePagebeforelogin from './HomePage/HomePagebeforelogin'
import Login from './Login/login'
import Register from './Register/register'


const MainPage = (props) => {
  const { loginStatus, loginCbHandler } = props;

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePagebeforelogin />}></Route>
        <Route path="/login" element={<Login loginStatus={loginStatus} loginCbHandler={loginCbHandler} />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  )
}

export default MainPage