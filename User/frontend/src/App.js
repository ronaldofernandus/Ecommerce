import React from 'react'
import Navbar from './components/Navbar';
import NavbarAfterLogin from './components/NavbarAfterLogin';
import HomePagebeforelogin from './pages/HomePage/HomePagebeforelogin';
import MainPage from './pages/MainPage';
import Product from './pages/Product/product';


function App() {
  return (
    <>
    {/* <Navbar></Navbar> */}
    {/* <MainPage></MainPage> */}
    <NavbarAfterLogin></NavbarAfterLogin>
    <Product></Product>
    
    </>
  );
}

export default App;
