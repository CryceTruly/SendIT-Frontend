import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../../actions/types";


import authReducer from "../../reducers/authReducer";

test("initial auth state", () => {
  const state = authReducer(undefined, {});
  expect(state).toEqual({
    user_id: localStorage.getItem("user_id"),
    isAuthenticated: null,
    isLoading: false,
    user: null,
  });
});

describe("Auth Reducer Tests", () => {
  const initialState = {
    user_id: localStorage.getItem("user_id"),
    isAuthenticated: null,
    isLoading: false,
    user: null,
  };

  it("should Load a user", () => {
    const successAction = {
      type: USER_LOADED,
      payload: {
        email: "aacryce@gmail.com",
        fullname: "AHEBWA CHRIS",
        imageUrl: "https://d3n32ilufxuvd1.cloudfront.net/56fd5ecfedf7a42502965830/716244/upload-57c882a0-fdc2-11e6-8942-e1606bea3fc0.png",
        is_admin: false,
        joined: "Sat, 20 Apr 2019 07:36:20 GMT",
        telephone_number: "0758939187",
        user_id: 10,
        username: "crycetrulytest",
      },
    };

    const successState = {
      user: {
        email: "aacryce@gmail.com",
        fullname: "AHEBWA CHRIS",
        imageUrl: "https://d3n32ilufxuvd1.cloudfront.net/56fd5ecfedf7a42502965830/716244/upload-57c882a0-fdc2-11e6-8942-e1606bea3fc0.png",
        is_admin: false,
        joined: "Sat, 20 Apr 2019 07:36:20 GMT",
        telephone_number: "0758939187",
        user_id: 10,
        username: "crycetrulytest",
      },

      user_id: localStorage.getItem("user_id"),
      isAuthenticated: true,
      isLoading: false,
    };
    expect(authReducer(initialState, successAction)).toEqual(successState);
  });

  it("should login a user", () => {
    const successAction = {
      type: LOGIN_SUCCESS,
      payload: {
        auth_token: "eyJ0eXAiOiJKV1QiLCJh",
        user: {
          email: "aacryce@gmail.com",
          fullname: "AHEBWA CHRIS",
          imageUrl: "https://d3n32ilufxuvd1.cloudfront.net/56fd5ecfedf7a42502965830/716244/upload-57c882a0-fdc2-11e6-8942-e1606bea3fc0.png",
          is_admin: false,
          joined: "Sat, 20 Apr 2019 07:36:20 GMT",
          telephone_number: "0758939187",
          user_id: 10,
          username: "crycetrulytest",
        },
      },
    };

    const successState = {
      auth_token: "eyJ0eXAiOiJKV1QiLCJh",
      user: {
        email: "aacryce@gmail.com",
        fullname: "AHEBWA CHRIS",
        imageUrl: "https://d3n32ilufxuvd1.cloudfront.net/56fd5ecfedf7a42502965830/716244/upload-57c882a0-fdc2-11e6-8942-e1606bea3fc0.png",
        is_admin: false,
        joined: "Sat, 20 Apr 2019 07:36:20 GMT",
        telephone_number: "0758939187",
        user_id: 10,
        username: "crycetrulytest",
      },

      user_id: localStorage.getItem("user_id"),
      isAuthenticated: true,
      isLoading: false,
    };
    expect(authReducer(initialState, successAction)).toEqual(successState);
  });


  it("should register a user", () => {
    const successAction = {
      type: REGISTER_SUCCESS,
      payload: {
        message: "verify account",
      },
    };

    const successState = {
      message: "verify account",
      user: null,
      user_id: localStorage.getItem("user_id"),
      isAuthenticated: false,
      isLoading: false,
    };
    expect(authReducer(initialState, successAction)).toEqual(successState);
  });


  it("should catch auth errors", () => {
    const successAction = {
      type: AUTH_ERROR,
      payload: {
        message: "something went wrong",
      },
    };

    const successState = {
      message: "something went wrong",
      user: null,
      user_id: localStorage.getItem("user_id"),
      isAuthenticated: false,
      isLoading: false,
    };
    expect(authReducer(initialState, successAction)).toEqual(successState);
  });


  it("should fail to login", () => {
    const successAction = {
      type: LOGIN_FAIL,
    };

    const successState = {
      auth_token: null,
      user: null,
      isAuthenticated: false,
      isLoading: false,

      user_id: localStorage.getItem("user_id"),
    };
    expect(authReducer(initialState, successAction)).toEqual(successState);
  });


  it("should Load when loading a user", () => {
    const dispatchedAction = {
      type: USER_LOADING,
    };
    const newState = {
      user_id: localStorage.getItem("user_id"),
      isAuthenticated: null,
      isLoading: true,
      user: null,
    };
    expect(authReducer(initialState, dispatchedAction)).toEqual(newState);
  });
});
