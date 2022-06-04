import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faDoorOpen,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

function NavbarAfterLogin(props) {
  const { loginStatus, loginCbHandler } = props;
  const navigate = useNavigate();
  const loginButton = () => {
    loginCbHandler(true);
  };

  const logoutButton = () => {
    localStorage.clear();
    loginCbHandler(false);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-color-navbar">
      <div className="container-sm">
        <Link className="nav-link" to="/">
          <h1 className="title-navbar">Distro</h1>
        </Link>
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item item-style">
            <Link className="nav-link" to="/profile" style={{ color: "white" }}>
              {" "}
              <span>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              </span>
              Profile
            </Link>
          </li>

          <li className="nav-item item-style">
            <Link
              className="nav-link"
              to="/shopping_cart"
              style={{ color: "white" }}
            >
              {" "}
              <span>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
              </span>
              Shopping Cart
            </Link>
          </li>

          <li className="nav-item item-style">
            <Link className="nav-link" to="/order" style={{ color: "white" }}>
              {" "}
              <span>
                <FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon>
              </span>
              Order
            </Link>
          </li>

          <li className="nav-item item-style">
            {loginStatus ? (
              <button
                onClick={() => logoutButton()}
                className="btn btn-outline-success"
                type="submit"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => loginButton()}
                className="btn btn-outline-success"
                type="submit"
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarAfterLogin;
