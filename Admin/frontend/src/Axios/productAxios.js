import axios from "axios";

export const getListProduct = "getListProduct";

export const getProduct = () => {
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "getListProduct",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: "http://localhost:3000/product",
      timeout: 120000,

      header: {
        get_token: get_token,
      },
    })
      .then((response) => {
        dispatch({
          type: "getListProduct",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "getListProduct",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
