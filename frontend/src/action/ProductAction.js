import axios from "axios";

const GET_PRODUCT = "GET_PRODUCT";
const GET_PRODUCT_USER = "GET_PRODUCT_USER";
const FIND_PRODUCT = "FIND_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const DETAIL_PRODUCT = "DETAIL_PRODUCT";
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
            timeout: 120000
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

const getProductUser = (access_token) => {
    return (dispatch) => {
        dispatch({
            type: "GET_PRODUCT_USER",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "GET",
            url: "http://localhost:3000/product_user",
            timeout: 120000,
            headers: {
                access_token: access_token
            }
        })
            .then( (response) => {
                dispatch({
                    type: "GET_PRODUCT_USER",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch( (error) => {
                dispatch({
                    type: "GET_PRODUCT_USER",
                    payload: {
                        loading: false,
                        data: error.message,
                        errorMessage: false
                    }
                })
            })
    }
};

const findProduct = (access_token) => {
    return (dispatch) => {
        dispatch({
            type: "FIND_PRODUCT",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "GET",
            url: "http://localhost:3000/search_product",
            timeout: 120000,
            headers: {
                access_token: access_token
            }
        })
            .then( (response) => {
                dispatch({
                    type: "FIND_PRODUCT",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch( (error) => {
                dispatch({
                    type: "FIND_PRODUCT",
                    payload: {
                        loading: false,
                        data: error.message,
                        errorMessage: false
                    }
                })
            })
    }
};

const addProduct = (access_token, data) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_PRODUCT",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "GET",
            url: "http://localhost:3000/add_product",
            timeout: 120000,
            data: data,
            headers: {
                access_token: access_token
            }
        })
            .then( (response) => {
                dispatch({
                    type: "ADD_PRODUCT",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch( (error) => {
                dispatch({
                    type: "ADD_PRODUCT",
                    payload: {
                        loading: false,
                        data: error.message,
                        errorMessage: false
                    }
                })
            })
    }
};

const deleteProduct = (access_token, id) => {
    return (dispatch) => {
        dispatch({
            type: "DELETE_PRODUCT",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "GET",
            url: `http://localhost:3000/delete_product/${id}`,
            timeout: 120000,
            headers: {
                access_token: access_token
            }
        })
            .then( (response) => {
                dispatch({
                    type: "DELETE_PRODUCT",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch( (error) => {
                dispatch({
                    type: "DELETE_PRODUCT",
                    payload: {
                        loading: false,
                        data: error.message,
                        errorMessage: false
                    }
                })
            })
    }
};

const editProduct = (access_token, data, id) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_PRODUCT",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: "GET",
            url: `http://localhost:3000/edit_product/${id}`,
            timeout: 120000,
            data: data,
            headers: {
                access_token: access_token
            }
        })
            .then( (response) => {
                dispatch({
                    type: "UPDATE_PRODUCT",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch( (error) => {
                dispatch({
                    type: "UPDATE_PRODUCT",
                    payload: {
                        loading: false,
                        data: error.message,
                        errorMessage: false
                    }
                })
            })
    }
};

const detailProduct = (data) => {
    return (dispatch) => {
        dispatch({
                type: "DETAIL_PRODUCT",
                payload: {
                    data: data
                }
        })
    }
};

const detailProductUser = (data) => {
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
            url: `http://localhost:3000/info/${data}`,
            timeout: 120000
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

const imageUpload = (data) => {
    fetch("http://localhost:3000/single", {
        method: "POST",
        body: data
    })
        .then( (response) => {
            console.log(response.data);
        })
        .catch( (error) => {
            console.log(error.message);
        })
};



export {
    getProduct, GET_PRODUCT,
    getProductUser, GET_PRODUCT_USER,
    findProduct, FIND_PRODUCT,
    addProduct, ADD_PRODUCT,
    deleteProduct, DELETE_PRODUCT,
    editProduct, UPDATE_PRODUCT,
    detailProduct, DETAIL_PRODUCT,
    detailProductUser, DETAIL_PRODUCT_USER,
    imageUpload
}