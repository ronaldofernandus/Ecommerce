import React, { useState, useEffect } from "react";
import "./libraries/bootstrap/css/bootstrap.css";
import "./styles/main.css";
import { detail1 } from "./image";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWeightHanging,
  faShirt,
  faCalendarDays,
  faMagnifyingGlass,
  faShapes,
  faWarehouse,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import {
  deleteProduct,
  detailProduct,
  getProduct,
  getProductById,
} from "../../action/ProductAction";
import image_2 from "./img-2.jpg";

const DetailProduct = () => {
  const dispatch = useDispatch();
  const {
    getListProductResult,
    getListProductLoading,
    getListProductError,
    deleteProductReducer,
  } = useSelector((state) => state.productReducers);
  const {
    getListProductByIdResult,
    getListProductByIdLoading,
    getListProductByIdError,
  } = useSelector((state) => state.productReducers);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductById());
  }, [dispatch]);

  return (
    <div className="bg-color-product">
      <br></br>
      <br></br>
      <div className="container row-bg-color">
        <br></br>
        <div className="row justify-content-center ">
          <div className="col-7">
            <img
              src={image_2}
              alt=""
              align="center"
              className="img-fluid img-responsive img-thumbnail"
            />
          </div>
          <div className="col-5 ">
            <div class="card-body">
              <h5 class="card-title">Baju</h5>
              <p class="card-text">Deskripsi Baju</p>
              <p class="card-text">Harga Baju </p>
              <p class="card-text">
                <small class="text-muted">
                  <span>
                    <FontAwesomeIcon icon={faWarehouse}></FontAwesomeIcon>{" "}
                    Jumlah Stock :{" "}
                  </span>
                  3{" "}
                </small>
              </p>
              <p class="card-text">
                <small class="text-muted">
                  <span>
                    <FontAwesomeIcon icon={faWeightHanging}></FontAwesomeIcon>{" "}
                    Berat Barang:{" "}
                  </span>{" "}
                  0.5 gram
                </small>
              </p>
              <p class="card-text">
                <small class="text-muted">
                  <span>
                    <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>{" "}
                    Expire:{" "}
                  </span>{" "}
                  timestamp
                </small>
              </p>
              <p class="card-text">
                <small class="text-muted">
                  <span>
                    <FontAwesomeIcon icon={faShirt}></FontAwesomeIcon> Brand:{" "}
                  </span>{" "}
                  Barnd
                </small>
              </p>
              <p class="card-text">
                <small class="text-muted">
                  <span>
                    <FontAwesomeIcon icon={faShapes}></FontAwesomeIcon>{" "}
                    Category:{" "}
                  </span>{" "}
                  Baju
                </small>
              </p>
              <p class="card-text">
                <small class="text-muted">
                  <span>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>{" "}
                    Condition:{" "}
                  </span>{" "}
                  Baru
                </small>
              </p>
              <p class="card-text">
                <small class="text-muted">
                  <span>
                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> Views:{" "}
                  </span>{" "}
                  3
                </small>
              </p>
              <p class="card-text">
                <small class="text-muted">
                  {" "}
                  <Rating initialValue={4} />
                </small>
              </p>
            </div>
          </div>
        </div>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default DetailProduct;
