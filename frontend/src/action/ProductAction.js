import axios from "axios";

const GET_PRODUCT = "GET_PRODUCT";
const DETAIL_PRODUCT_USER = "DETAIL_PRODUCT_USER";

const getProduct = () => {
    return (dispatch) => {
        dispatch({
            type: "GET_PRODUCT",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "GET",
            url: "http://localhost:3000/products",
            // timeout: 120000
        })
            .then( (response) => {
                dispatch({
                    type: "GET_PRODUCT",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch( (error) => {
                dispatch({
                    type: "GET_PRODUCT",
                    payload: {
                        loading: false,
                        data: error.message,
                        errorMessage: false
                    }
                })
            })
    }
};

const detailProductUser = (id) => {
    return (dispatch) => {
        dispatch({
            type: "DETAIL_PRODUCT_USER",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "GET",
            url: `http://localhost:3000/products/info/${id}`,
            // timeout: 120000
        })
            .then((response) => {
                dispatch({
                    type: "DETAIL_PRODUCT_USER",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: "DETAIL_PRODUCT_USER",
                    payload: {
                        loading: false,
                        data: error.message,
                        errorMessage: false
                    }
                })
            })
    }
};


export {
    getProduct, GET_PRODUCT,
    detailProductUser, DETAIL_PRODUCT_USER,
}