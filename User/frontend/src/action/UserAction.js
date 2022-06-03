import axios from 'axios';

const REGISTER_USER = "REGISTER_USER";
const GET_USER = "GET_USER";

const addUser = (data) => {
    return (dispatch) => {
        dispatch({
            type: "REGISTER_USER",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        });
        axios({
            method: "POST",
            url: "http://localhost:3000/users/register",
            timeout: 60000,
            data: data
        })
            .then((response) => {
                dispatch({
                    type: "REGISTER_USER",
                    payload: {
                        loading: false,
                        data: response.message,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => [
                dispatch({
                    type: "REGISTER_USER",
                    payload: {
                        loading: false,
                        data: err.message,
                        errorMessage: false
                    }
                })
            ])
    }
};

const getUser = (access_token) => {
    return (dispatch) => {
        dispatch({
            type: "GET_USER",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        });
        axios({
            method: "GET",
            url: "http://localhost:3000/users/info",
            timeout: 60000,
            headers: {
                accesToken: access_token
            }
        })
            .then((response) => {
                dispatch({
                    type: "GET_USER",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: "GET_USER",
                    payload: {
                        loading: false,
                        data: err.message,
                        errorMessage: false
                    }
                })
            })
    }
};

export {
    addUser, getUser,
    REGISTER_USER, GET_USER
}