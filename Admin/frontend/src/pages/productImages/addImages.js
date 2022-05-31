import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImage, addImage } from "../../Axios/imageAxios";
import { getProduct } from "../../Axios/productAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddImage = () => {
  // const [prim_filename, setPrim_filename] = useState("");
  // const [prim_filesize, setPrim_filesize] = useState("");
  // const [prim_filetype, setPrim_filetype] = useState("");
  // const [prim_primary, setPrim_primary] = useState("");
  const [productId, setProductId] = useState("");

  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [saveImage, setSaveImage] = useState(null);

  const { addImageResult } = useSelector((state) => state.imageReducers);

  const { getListProductResult, getListProductLoading, getListProductError } =
    useSelector((state) => state.productReducers);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const onChangeHandler = (e) => {
  //   let uploaded = e.target.files;
  //   Array.from(uploaded).forEach((upload) => {

  //     setImage(URL.createObjectURL(upload));
  //   });

  // };

  // const onChangeHandler = (e) => {
  //   console.log(e.target.files[0]);
  //   let uploaded = e.target.files[0];
  //   setImage(URL.createObjectURL(uploaded));
  //   saveImage(uploaded);
  // };
  const addHandler = (event) => {
    // console.log("1. Mulai");
    // dispatch(
    //   addImage({
    //     prim_filename: prim_filename,
    //     prim_filesize: prim_filesize,
    //     prim_filetype: prim_filetype,
    //     prim_primary: prim_primary,
    //     prim_primary: prim_primary,
    //   })
    // );
    // Swal.fire({
    //   icon: "success",
    //   title: "Add Post Success!",
    //   text: `You've successfully created an post!`,
    // });
    // navigate("/productImage");
  };

  useEffect(() => {
    if (addImageResult) {
      // console.log("5. Masukk Component did update");
      dispatch(getImage());
    }
  }, [addImageResult, dispatch]);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <div className="row ">
        <div className="col-12 text-center">
          <h5>Tambah Data Image</h5>
        </div>
        <div className="col-12 my-2">
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Produk yang di pesan
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
              <option selected>Product yang di pesan adalah</option>
              {getListProductResult ? (
                getListProductResult.map((product) => {
                  return (
                    <option value={product.id}>{product.prod_name}</option>
                  );
                })
              ) : getListProductLoading ? (
                <p>Loading...</p>
              ) : (
                <p>
                  {getListProductError ? getListProductError : "Data Kosong"}
                </p>
              )}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Gambar Product
            </label>
            <div>
              <img src={image} className="img-thumbnail" alt="" />
            </div>

            <input
              onChange={onChangeHandler}
              type="file"
              className="form-control"
              id="formFile"
              accept="image/*"
              // multiple={true}
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

export default AddImage;
