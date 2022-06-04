import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlus, 
  faInfo } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import image_2 from "./img-2.jpg";
import image_3 from "./img-3.png";
import { Link, useNavigate } from "react-router-dom";

function Product() {
  const navigation = useNavigate();

  const access_token = localStorage.getItem('access_token');
  if(!access_token) {
    return (navigation('/'))
  }
  

  return (
    <>
      <div className="banner-home">
        <img
          className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
          src={image_3}
          alt=""
        ></img>
      </div>
      <div className="bg-color-product">
        <div className="container">
          <br></br>
          <h1 className="product-title">All Products</h1>
          <br></br>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img
                  src={image_2}
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Baju</h5>
                  <p className="card-text">Rp 50.000</p>
                  <div className="edit-btn d-grid gap-2 d-md-flex justify-content-md-center">
                    <Link className="btn btn-sm btn btn-outline-primary" to="">
                      <span>
                        <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
                      </span>{" "}
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={image_2}
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Baju</h5>
                  <p className="card-text">Rp 67.000</p>
                  <div className="edit-btn d-grid gap-2 d-md-flex justify-content-md-center">
                    <Link className="btn btn-sm btn btn-outline-primary" to="">
                      <span>
                        <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
                      </span>{" "}
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={image_2}
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Baju</h5>
                  <p className="card-text">Rp 65.000</p>
                  <div className="edit-btn d-grid gap-2 d-md-flex justify-content-md-center">
                    <Link className="btn btn-sm btn btn-outline-primary" to="">
                      <span>
                        <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
                      </span>{" "}
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={image_2}
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Baju</h5>
                  <p className="card-text">Rp 55.000</p>
                  <div className="edit-btn d-grid gap-2 d-md-flex justify-content-md-center">
                    <Link className="btn btn-sm btn btn-outline-primary" to="">
                      <span>
                        <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
                      </span>{" "}
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;