import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailProductUser } from "../../action/ProductAction";

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
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import image_2 from "./img-2.jpg";

function DetailProduct() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { detailProductUserResult, detailProductUserLoading, detailProductUserError } = useSelector(
    (state) => state.productReducers
  );

  useEffect(() => {
    dispatch(detailProductUser(+id))
  }, [dispatch]);


  return (
    <div className="bg-color-product">
      <br></br>
      <br></br>
      <div className="container row-bg-color">
        <br></br>

        {detailProductUserResult ? (
          detailProductUserResult.map((e) => {
            return (
              <>
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
                      <h5 class="card-title">{e.prod_name}</h5>
                      <p class="card-text">{e.prod_desc}</p>
                      <p class="card-text"><span>Rp. </span>{e.prod_price}</p>
                      <p class="card-text">
                        <small class="text-muted">
                          <span>
                            <FontAwesomeIcon icon={faWarehouse}></FontAwesomeIcon>{" "}
                            Jumlah Stock :{" "}
                          </span>
                          {e.prod_stock} {" "}
                        </small>
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          <span>
                            <FontAwesomeIcon icon={faWeightHanging}></FontAwesomeIcon>{" "}
                            Berat Barang:{" "}
                          </span>{" "}
                          {e.prod_weight}
                        </small>
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          <span>
                            <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>{" "}
                            Expire:{" "}
                          </span>{" "}
                          {e.prod_expire}
                        </small>
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          <span>
                            <FontAwesomeIcon icon={faShirt}></FontAwesomeIcon> Brand:{" "}
                          </span>{" "}
                          {e.prod_brand}
                        </small>
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          <span>
                            <FontAwesomeIcon icon={faShapes}></FontAwesomeIcon>{" "}
                            Category:{" "}
                          </span>{" "}
                          {e.prod_category}
                        </small>
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          <span>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>{" "}
                            Condition:{" "}
                          </span>{" "}
                          {e.prod_condition}
                        </small>
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          <span>
                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> Views: {" "}
                          </span>{" "}
                          {e.prod_views}
                        </small>
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          {" "}
                          <Rating initialValue={e.prod_rating} />
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        ) : (
          detailProductUserLoading ? (
            <p>Loading...</p>
          ) : (
            <p>{detailProductUserError ? detailProductUserError : "Empty Data"}</p>
          )
        )}

        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default DetailProduct;
