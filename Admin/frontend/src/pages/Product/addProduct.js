import React, { useState } from "react";

const AddProduct = () => {
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

  return (
    <>
      <div className="row ">
        <div className="col-12 text-center">
          <h5>Tambah Data Product</h5>
        </div>
        <div className="col-12 my-2">
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Nama Product
            </label>
            <input
              value={prod_name}
              onChange={(event) => setProd_name(event.target.value)}
              type="date"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Nama Product
            </label>
            <input
              value={prod_name}
              onChange={(event) => setProd_name(event.target.value)}
              type="date"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Nama Product
            </label>
            <input
              value={prod_name}
              onChange={(event) => setProd_name(event.target.value)}
              type="date"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Nama Product
            </label>
            <input
              value={prod_name}
              onChange={(event) => setProd_name(event.target.value)}
              type="date"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Nama Product
            </label>
            <input
              value={prod_name}
              onChange={(event) => setProd_name(event.target.value)}
              type="date"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Nama Product
            </label>
            <input
              value={prod_name}
              onChange={(event) => setProd_name(event.target.value)}
              type="date"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Nama Product
            </label>
            <input
              value={prod_name}
              onChange={(event) => setProd_name(event.target.value)}
              type="date"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Nama Product
            </label>
            <input
              value={prod_name}
              onChange={(event) => setProd_name(event.target.value)}
              type="date"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Nama Product
            </label>
            <input
              value={prod_name}
              onChange={(event) => setProd_name(event.target.value)}
              type="date"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Nama Product
            </label>
            <input
              value={prod_name}
              onChange={(event) => setProd_name(event.target.value)}
              type="date"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Nama Product
            </label>
            <input
              value={prod_name}
              onChange={(event) => setProd_name(event.target.value)}
              type="date"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Nama Product
            </label>
            <input
              value={prod_name}
              onChange={(event) => setProd_name(event.target.value)}
              type="date"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>

          <button
            // onClick={() => addHandler()}
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

export default AddProduct;
