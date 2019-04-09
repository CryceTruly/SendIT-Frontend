import axios from "axios";
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
    ADD_MESSAGE,
    SOMETHING_LOADING
} from "./types";
import BASE_URL from "../constants";
// Check token & load user
export const loadUser = () => (dispatch) => {
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
},routes) => dispatch => {


    dispatch({
        type:SOMETHING_LOADING
    })
    setTimeout(() => {

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
        .then(res =>{
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: res.data
                }),
                dispatch({
                    type:ADD_MESSAGE,
                    payload:{ msg:'Account created successfully,You may login now',
                    status: 'Success',
                            id: 'LOGOUT-SUCCESS'}

                }),


        routes.history.push('/login')
        }
        )
        .catch(err => {
    dispatch(
        returnErrors(err.response.data.message, err.response.status, "REGISTER_FAIL")
    );
    dispatch({
        type: REGISTER_FAIL
    });
});
    }, 200);
};

// Login User
export const login = ({
    email,
    password
}, routes) => dispatch => {


    dispatch({
        type:SOMETHING_LOADING
    })
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
setTimeout(() => {
    // Request body
    const body = JSON.stringify({
        email,
        password
    });

    axios
        .post(`${BASE_URL}/auth/login`, body, config)
        .then(res => {
            localStorage.setItem("auth_token",  res.data.auth_token);
            localStorage.setItem("user_id", res.data.user.user_id);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            routes.history.push("/");
        })
        .catch(err => {
            dispatch(
                returnErrors(err.response.data.message, err.response.status, "LOGIN_FAIL")
            );
            dispatch({
                type: LOGIN_FAIL
            });
        });
}, 100);

};

// Logout User
export const logout = (props)=>(dispatch) => {
dispatch({
    type:ADD_MESSAGE,
    payload:{ msg:'You have successfuly logged out',
    status: 'Success',
            id: 'LOGOUT-SUCCESS'}

})
    dispatch( {
        type: LOGOUT_SUCCESS
    }
    )
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
