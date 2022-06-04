import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProduct } from "../../action/ProductAction";
import { useDispatch, useSelector } from 'react-redux';

import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faInfo } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import image_2 from "./img-2.jpg";
import image_3 from "./img-3.png";
import Swal from 'sweetalert2';

function Product() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { getProductResult, getProductLoading, getProductError } = useSelector(
    (state) => state.productReducers
  );

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])


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
          {getProductResult ? (
            getProductResult.map((e) => {
              return (
                <>
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                      <div className="card h-100">
                        <img
                          src={image_2}
                          className="card-img-top img-thumbnail"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{e.prod_name}</h5>
                          <p className="card-text"><span>Rp. </span>{e.prod_price}</p>
                          <div className="edit-btn d-grid gap-2 d-md-flex justify-content-md-center">
                            <Link className="btn btn-sm btn btn-outline-primary" to={`detail/${e.id}`}>
                              <span>
                                <FontAwesomeIcon icon={faInfo} />
                              </span>{" "}
                              Detail
                            </Link>
                            <button className="btn btn-sm btn-outline-success" >
                              <span>
                                <FontAwesomeIcon icon={faPlus} />
                              </span>{" "}
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          ) : (
            getProductLoading ? (
              <p>Loading...</p>
            ) : (
              <p>{getProductError ? getProductError : "Empty Data"}</p>
            )
          )}

        </div>
      </div>
    </>
  );
}

export default Product;