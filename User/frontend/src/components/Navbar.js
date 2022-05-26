import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-color-navbar">
        <div className="container-sm">
          <Link className="nav-link" to='/' >
          <h1 className="title-navbar">Distro</h1>
          </Link>
          
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item item-style">
              <Link className="nav-link" to="/admin" style={{color: 'white'}}>Admin</Link>
              </li>
            </ul>
        </div>
      </nav>
  )
}

export default Navbar