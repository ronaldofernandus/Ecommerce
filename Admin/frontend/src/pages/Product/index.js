import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const Product = () => {
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
        </table>
      </div>
    </>
  );
};

export default Product;
