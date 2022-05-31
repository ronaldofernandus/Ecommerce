import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {
  getProductUser,
  detailProduct,
  deleteProduct,
  editProduct
} from "../../action/ProductAction";

import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faInfo } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import image_2 from "./img-2.jpg";
import image_3 from "./img-3.png";
import Swal from "sweetalert2";


function Product() {
  const dispatch = useDispatch();

  const {
    getProductUserResult,
    getProductUserLoading,
    getProductUserError,
    deleteProductResult
  } = useSelector((state) => state.productReducers);

  useEffect(() => {
    if (deleteProductResult) {
      Swal.fire(
        'Delete Successfully',
        'Click button!',
        'success'
      )
      dispatch(getProductUser(localStorage.getItem('access_token')))
    }
  })

  useEffect(() => {
    dispatch(getProductUser(localStorage.getItem('access_token')))
  }, [dispatch]);


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
            {getProductUserResult ?
              (getProductUserResult.map((product) => {
                return (
                  <>
                    <div className="col">
                      <div className="card h-100">
                        <img
                          // src={require(`../../assets/images/${product.image}`)}
                          src={image_2}
                          className="card-img-top img-thumbnail"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.prod_name}</h5>
                          <p className="card-text">{product.prod_price}</p>
                          <div className="edit-btn d-grid gap-2 d-md-flex justify-content-md-center">
                            <Link
                              className="btn btn-sm btn btn-outline-primary"
                              onClick={() => dispatch(detailProduct(product))}
                              to={`/products/info/${product.id}`}>
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
                  </>
                )
              })
              ) : getProductUserLoading ? (
                <p>Loading...</p>
              ) : (
                <p>
                  {getProductUserError ? getProductUserError : "data kosong"}
                </p>
              )}

          </div>

        </div>
      </div>
    </>
  );
}

export default Product;
