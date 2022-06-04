import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteProduct,
  detailProduct,
  getProduct,
} from "../../action/ProductAction";

import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faInfo } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import image_2 from "./img-2.jpg";
import image_3 from "./img-3.png";
import Swal from "sweetalert2";

function Product() {
  const {
    getListProductResult,
    getListProductLoading,
    getListProductError,
    deleteProductReducer,
  } = useSelector((state) => state.productReducers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  useEffect(() => {
    if (deleteProductReducer) {
      // console.log("5. Masukk Component did update");
      dispatch(getProduct());
    }
  }, [deleteProductReducer, dispatch]);

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
          <br></br>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {getListProductResult ? (
              getListProductResult.map((product, index) => {
                return (
                  <>
                    <div className="col">
                      <div className="card h-100">
                        <img
                          src={`http://localhost:3000/images/${product.product_images[0].prim_filename}`}
                          className="card-img-top img-thumbnail"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.prod_name}</h5>
                          <p className="card-text">Rp{product.prod_price}</p>
                          <div className="edit-btn d-grid gap-2 d-md-flex justify-content-md-center">
                            <Link
                              className="btn btn-sm btn btn-outline-primary"
                              to={`product/detail/${product.id}`}
                              

                            >
                              <span>
                                <FontAwesomeIcon
                                  icon={faInfo}
                                ></FontAwesomeIcon>
                              </span>{" "}
                              Detail
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : getListProductLoading ? (
              <p>Loading...</p>
            ) : (
              <p>{getListProductError ? getListProductError : "Data Kosong"}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
