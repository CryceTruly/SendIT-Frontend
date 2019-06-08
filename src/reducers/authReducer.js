import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SENDING_RESET_EMAIL,
  SENDING_RESET_EMAIL_FAILED,
  SENDING_RESET_EMAIL_SUCCESS,
} from "../actions/types";

const initialState = {
  user_id: localStorage.getItem("user_id"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  reset_loading: false,
  messages: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
  case USER_LOADING:
    return {
      ...state,
      isLoading: true,
    };
  case USER_LOADED:
    return {
      ...state,
      isAuthenticated: true,
      isLoading: false,
      user: action.payload,
    };
  case LOGIN_SUCCESS:
    return {
      ...state,
      ...action.payload,
      isAuthenticated: true,
      isLoading: false,
    };
  case REGISTER_SUCCESS:
    return {
      ...state,
      ...action.payload,
      user: null,
      isAuthenticated: false,
      isLoading: false,
    };
  case AUTH_ERROR:
    return {
      ...state,
      ...action.payload,
      user: null,
      isAuthenticated: false,
      isLoading: false,
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
      isLoading: false,
    };

  case SENDING_RESET_EMAIL:
    return {
      ...state,
      reset_loading: true,
    };
  case SENDING_RESET_EMAIL_FAILED:
    return {
      ...state,
      reset_loading: false,
    };
  case SENDING_RESET_EMAIL_SUCCESS:
    return {
      ...state,
      reset_loading: false,
      messages: [action.payload.message],
    };
  default:
    return state;
  }
}
