import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImage, addImage } from "../../Axios/imageAxios";
import { getProduct } from "../../Axios/productAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../../fetch/index";

const AddImage = () => {
  const { addImageResult } = useSelector((state) => state.imageReducers);

  const { getListProductResult, getListProductLoading, getListProductError } =
    useSelector((state) => state.productReducers);

  const [image, setImage] = useState({
    prim_filename: "",
    prim_filesize: "",
    prim_filetype: "",
    prim_primary: "",
  });

  // const [image, setImage] = useState("https://via.placeholder.com/150");
  // const [image, setImage] = useState({});
  const [saveImage, setSaveImage] = useState(null);

  const [productId, setProductId] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.files);
    let uploaded = e.target.files;
    Array.from(uploaded).forEach((upload) => {
      setImage(URL.createObjectURL(upload));
      setSaveImage(upload);
    });
  };

  // const onChangeHandler = (e) => {
  //   console.log(e.target.files[0]);
  //   let uploaded = e.target.files[0];
  //   setImage(URL.createObjectURL(uploaded));
  //   setSaveImage(uploaded);
  // };

  const addHandler = (event) => {
    // console.log("1. Mulai");
    dispatch(
      addImage({
        image: image,
        productId: productId,
      })
    );
    Swal.fire({
      icon: "success",
      title: "Add Post Success!",
      text: `You've successfully created an post!`,
    });
    navigate("/productImage");
  };

  const submitPostHandler = () => {
    const data = new FormData();
    data.append("image", image);
    uploadImage(data);
    addHandler(image.name);
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
            <img src={image} alt="" />
            <input
              type="file"
              onChange={handleChange}
              // onChange={onChangeHandler}
              className="form-control"
              id="formFile"
              accept="image/*"
              multiple={true}
            />
          </div>

          <button
            onClick={() => submitPostHandler()}
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
