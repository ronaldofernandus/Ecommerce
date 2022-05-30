import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem, addItem } from "../../Axios/itemAxios";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddOrder = () => {
  const [line_qty, setLine_qty] = useState("");
  const [line_status, setLine_status] = useState("");
  const [productId, setProductId] = useState("");
  const [shoppingCartId, setShoppingCartId] = useState("");
  const [orderId, setOrderId] = useState("");

  const { addItemResult } = useSelector((state) => state.itemReducers);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addHandler = (event) => {
    console.log("1. Mulai");
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
      title: "Add Item Success!",
      text: `You've successfully created an post!`,
    });
    navigate("/item");
  };

  useEffect(() => {
    if (addItemResult) {
      // console.log("5. Masukk Component did update");
      dispatch(getItem());
    }
  }, [addItemResult, dispatch]);

  return (
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
            onClick={() => addHandler()}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddOrder;
