import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getProduct } from "../../Axios/productAxios";

const Product = () => {
  const { getListProductResult, getListProductLoading, getListProductError } =
    useSelector((state) => state.productReducers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <div className="col-12 my-2">
        <button type="button" className="btn btn-secondary">
          <AiFillFileAdd></AiFillFileAdd>
          <Link to="/add" className="add">
            Add
          </Link>
        </button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Produk</th>
              <th>Deskripsi</th>
              <th>Harga</th>
              <th>Stok Barang</th>
              <th>Expire</th>
              <th>Berat Barang</th>
              <th>Kategori</th>
              <th>Brand</th>
              <th>Kondisi</th>
              <th>Total Terjual</th>
              <th>Rating</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {getListProductResult ? (
              getListProductResult.map((product, index) => {
                return (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.prod_name}</td>
                    <td>{product.prod_desc}</td>
                    <td>{product.prod_price}</td>
                    <td>{product.prod_stock}</td>
                    <td>{product.prod_expire}</td>
                    <td>{product.prod_weight}</td>
                    <td>{product.prod_category}</td>
                    <td>{product.prod_brand}</td>
                    <td>{product.prod_condition}</td>
                    <td>{product.prod_total_sold}</td>
                    <td>{product.prod_rating}</td>
                    <td>{product.prod_views}</td>
                  </tr>
                );
              })
            ) : getListProductLoading ? (
              <p>Loading...</p>
            ) : (
              <p>{getListProductError ? getListProductError : "Data Kosong"}</p>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Product;
