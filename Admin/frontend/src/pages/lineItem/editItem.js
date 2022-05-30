import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { updateItem, getItem, addItem } from "../../Axios/itemAxios";

const EditProduct = () => {
  const [line_qty, setLine_qty] = useState("");
  const [line_status, setLine_status] = useState("");
  const [productId, setProductId] = useState("");
  const [shoppingCartId, setShoppingCartId] = useState("");
  const [orderId, setOrderId] = useState("");

  const [id, setId] = useState("");

  const { addItemResult, getDetailItem, updateItemReducer } = useSelector(
    (state) => state.itemReducers
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editHandler = (event) => {
    console.log("1. masuk");
    if (id) {
      dispatch(
        updateItem({
          id: id,
          line_qty: line_qty,
          line_status: line_status,
          productId: productId,
          shoppingCartId: shoppingCartId,
          orderId: orderId,
        })
      );

      Swal.fire({
        icon: "success",
        title: "Edit Item Success!",
        text: `You've successfully Edit an post!`,
      });
      navigate("/item");
    } else {
      dispatch(
        addItem({
          line_qty: line_qty,
          line_status: line_status,
          productId: productId,
          shoppingCartId: shoppingCartId,
          orderId: orderId,
        })
      );
      Swal.fire({
        icon: "success",
        title: "Add Order Success!",
        text: `You've successfully created an post!`,
      });
      navigate("/order");
    }
  };

  useEffect(() => {
    if (getDetailItem) {
      setLine_qty(getDetailItem.line_qty);
      setLine_status(getDetailItem.line_status);
      setProductId(getDetailItem.productId);
      setShoppingCartId(getDetailItem.shoppingCartId);
      setOrderId(getDetailItem.orderId);

      setId(getDetailItem.id);

      dispatch(getItem());
    }
  }, [getDetailItem, dispatch]);

  useEffect(() => {
    if (updateItemReducer) {
      // console.log("5. Masukk Component did update");
      dispatch(getItem());
    }
  }, [updateItemReducer, dispatch]);

  return (
    <>
      <>
        <div className="row ">
          <div className="col-12 text-center">
            <h5>Tambah Data Item</h5>
          </div>
          <div className="col-12 my-2">
            <div className="mb-3">
              <label className="form-label" for="customFile">
                Total Quantity
              </label>
              <input
                value={line_qty}
                onChange={(event) => setLine_qty(event.target.value)}
                type="number"
                className="form-control"
                id="customFile"
                name="order_subtotal"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" for="customFile">
                Line Status
              </label>
              <input
                value={line_status}
                onChange={(event) => setLine_status(event.target.value)}
                type="number"
                className="form-control"
                id="customFile"
                name="order_discount"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" for="customFile">
                Produk
              </label>
              <select
                value={productId}
                onChange={(event) => setProductId(event.target.value)}
                type="number"
                className="form-select"
                id="customFile"
                name="productId"
                aria-label="Default select example"
              >
                <option selected>Silahkan pilih product</option>
                <option value="1">One</option>
              </select>
              {/* <input
              value={productId}
              onChange={(event) => setProductId(event.target.value)}
              type="number"
              className="form-control"
              id="customFile"
              name="productId"
            /> */}
            </div>
            <div className="mb-3">
              <label className="form-label" for="customFile">
                Shop Cart
              </label>
              <select
                value={shoppingCartId}
                onChange={(event) => setShoppingCartId(event.target.value)}
                type="number"
                className="form-select"
                id="customFile"
                name="shoppingCartId"
                aria-label="Default select example"
              >
                <option selected>Silahkan pilih Cart</option>
                <option value="1">One</option>
              </select>
              {/* <input
              value={shoppingCartId}
              onChange={(event) => setShoppingCartId(event.target.value)}
              type="number"
              className="form-control"
              id="customFile"
              name="shoppingCartId"
            /> */}
            </div>
            <div className="mb-3">
              <label className="form-label" for="customFile">
                Order
              </label>
              <select
                value={orderId}
                onChange={(event) => setOrderId(event.target.value)}
                type="number"
                className="form-select"
                id="customFile"
                name="orderId"
                aria-label="Default select example"
              >
                <option selected>Silahkan pilih Order</option>
                <option value="1">One</option>
              </select>
              {/* <input
              value={orderId}
              onChange={(event) => setOrderId(event.target.value)}
              type="number"
              className="form-control"
              id="customFile"
              name="orderId"
            /> */}
            </div>

            <button
              onClick={() => editHandler()}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </>
    </>
  );
};

export default EditProduct;
