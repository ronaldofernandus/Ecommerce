import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

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
          <Link to="/product/add" className="add">
            Add
          </Link>
        </button>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Product;
