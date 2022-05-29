import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder, addOrder } from "../../Axios/OrderAxios";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddOrder = () => {
  const [prod_name, setProd_name] = useState("");
  const [prod_desc, setProd_desc] = useState("");
  const [prod_price, setProd_price] = useState("");
  const [prod_stock, setProd_stock] = useState("");
  const [prod_expire, setProd_expire] = useState("");
  const [prod_weight, setProd_weight] = useState("");
  const [prod_category, setProd_category] = useState("");
  const [prod_brand, setProd_brand] = useState("");
  const [prod_condition, setProd_condition] = useState("");
  const [prod_total_sold, setProd_total_sold] = useState("");
  const [prod_rating, setProd_rating] = useState("");
  const [prod_views, setProd_views] = useState("");

  const { addOrderResult } = useSelector((state) => state.OrderReducers);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addHandler = (event) => {
    // console.log("1. Mulai");
    dispatch(
      addOrder({
        prod_name: prod_name,
        prod_desc: prod_desc,
        prod_price: prod_price,
        prod_stock: prod_stock,
        prod_expire: prod_expire,
        prod_weight: prod_weight,
        prod_category: prod_category,
        prod_brand: prod_brand,
        prod_condition: prod_condition,
      })
    );
    Swal.fire({
      icon: "success",
      title: "Add Post Success!",
      text: `You've successfully created an post!`,
    });
    navigate("/Order");
  };

  useEffect(() => {
    if (addOrderResult) {
      // console.log("5. Masukk Component did update");
      dispatch(getOrder());
    }
  }, [addOrderResult, dispatch]);

  return (
    <>
      <div className="row ">
        <div className="col-12 text-center">
          <h5>Tambah Data Order</h5>
        </div>
        <div className="col-12 my-2">
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Nama Order
            </label>
            <input
              value={prod_name}
              onChange={(event) => setProd_name(event.target.value)}
              type="text"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Deskripsi Order
            </label>
            <input
              value={prod_desc}
              onChange={(event) => setProd_desc(event.target.value)}
              type="text"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Harga Barang
            </label>
            <input
              value={prod_price}
              onChange={(event) => setProd_price(event.target.value)}
              type="text"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Stok Barang
            </label>
            <input
              value={prod_stock}
              onChange={(event) => setProd_stock(event.target.value)}
              type="text"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Expire
            </label>
            <input
              value={prod_expire}
              onChange={(event) => setProd_expire(event.target.value)}
              type="date"
              className="form-control"
              id="customFile"
              name="prod_expire"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Berat Order
            </label>
            <input
              value={prod_weight}
              onChange={(event) => setProd_weight(event.target.value)}
              type="text"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Kategori Order
            </label>
            <input
              value={prod_category}
              onChange={(event) => setProd_category(event.target.value)}
              type="text"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Nama Brand
            </label>
            <input
              value={prod_brand}
              onChange={(event) => setProd_brand(event.target.value)}
              type="text"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Kondisi Order
            </label>
            <input
              value={prod_condition}
              onChange={(event) => setProd_condition(event.target.value)}
              type="text"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Total Terjual
            </label>
            <input
              value={prod_total_sold}
              onChange={(event) => setProd_total_sold(event.target.value)}
              type="text"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Rating
            </label>
            <input
              value={prod_rating}
              onChange={(event) => setProd_rating(event.target.value)}
              type="text"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Views
            </label>
            <input
              value={prod_views}
              onChange={(event) => setProd_views(event.target.value)}
              type="text"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
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
