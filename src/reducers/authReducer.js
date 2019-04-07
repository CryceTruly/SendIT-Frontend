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
    user_id:localStorage.getItem("user_id"),
    isAuthenticated: null,
    isLoading: false,
    user:null
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
        return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false
        };
    case REGISTER_SUCCESS:
        return {
            ...state,
            ...action.payload,
            user:null,
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
            user: null,
            isAuthenticated: false,
            isLoading: false
        };
    default:
        return state;
    }
}