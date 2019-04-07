import axios from "axios";
import {
    createBrowserHistory
} from "history";
import {
    returnErrors
} from "./errorActions";
// history.js
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    REGISTER_LOADING
} from "./types";
import BASE_URL from "../constants";
// Check token & load user
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({
        type: USER_LOADING
    });

    axios
        .get(`${BASE_URL}/users/${localStorage.getItem("user_id")}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("auth_token")}`
            }
        })
        .then(res =>
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data.message, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};

// Register User
export const register = ({
    fullname,
    phone_number,
    username,
    email,
    password
}) => dispatch => {

    dispatch({
        type: USER_LOADING
    });
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // Request body
    const body = JSON.stringify({
        fullname,
        phone_number,
        username,
        email,
        password
    });

    axios
        .post(`${BASE_URL}/auth/signup`, body, config)
        .then(res =>
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        )
        .catch(err => {

            dispatch(
                returnErrors(err.response.data.message, err.response.status, "REGISTER_FAIL")
            );
            dispatch({
                type: REGISTER_FAIL
            });
        });
};

// Login User
export const login = ({
    email,
    password
}, obj) => dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // Request body
    const body = JSON.stringify({
        email,
        password
    });

    axios
        .post(`${BASE_URL}/auth/login`, body, config)
        .then(res => {

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            obj.history.push("/");


        })
        .catch(err => {
            dispatch(
                returnErrors(err.response.data.message, err.response.status, "LOGIN_FAIL")
            );
            dispatch({
                type: LOGIN_FAIL
            });
        });
};

// Logout User
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

// Setup config/headers and token
export const tokenConfig = getState => {
    // Get token from localstorage
    const token = getState().auth.auth_token;

    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };

    // If token, add to headers
    if (token) {
        config.headers["x-auth-token"] = token;
    }

    return config;
};
