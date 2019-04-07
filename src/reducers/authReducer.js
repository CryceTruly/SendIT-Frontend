import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "../actions/types";

const initialState = {
    auth_token: localStorage.getItem("auth_token"),
    user_id:localStorage.getItem("user_id"),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    username: null
};

export default function (state = initialState, action) {
    switch (action.type) {
    case USER_LOADING:
        return {
            ...state,
            isLoading: true
        };
    case USER_LOADED:
        return {
            ...state,
            isAuthenticated: true,
            isLoading: false,
            user: action.payload
        };
    case LOGIN_SUCCESS:
        localStorage.setItem("auth_token", action.payload.auth_token);
        localStorage.setItem("user_id",action.payload.user_id);
        return {
            ...state,
            user: action.payload,
            isAuthenticated: true,
            isLoading: false
        };
    case REGISTER_SUCCESS:
        return {
            ...state,
            ...action.payload,
            isAuthenticated: false,
            isLoading: false
        };
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
        localStorage.removeItem("auth_token");
        localStorage.removeItem("user_id");
        return {
            ...state,
            auth_token: null,
            username: null,
            isAuthenticated: false,
            isLoading: false
        };
    default:
        return state;
    }
}