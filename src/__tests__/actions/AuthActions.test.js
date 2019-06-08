import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import {
  login, logout, register, loadUser, 
} from "../../actions/authActions";

import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  ADD_MESSAGE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("authentication process", () => {
  const props = {
    history: {
      push: jest.fn(),
    },
  };
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("logs in successfully", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          data: {
            auth_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTY1NjM2NDksInVzZX",
            user: {
              email: "aacryce@gmail.com",
              fullname: "AHEBWA CHRIS",
              is_admin: false,
              joined: "Sat, 20 Apr 2019 07:36:20 GMT",
              telephone_number: "0758939187",
              user_id: 10,
              username: "crycetrulytest",
            },
          },
        },
      });
    });
    const expectedActions = [
      { type: "SOMETHING_LOADING" },
      {
        type: LOGIN_SUCCESS,
        payload: {
          auth_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTY1NjM2NDksInVzZX",
          user: {
            email: "aacryce@gmail.com",
            fullname: "AHEBWA CHRIS",
            is_admin: false,
            joined: "Sat, 20 Apr 2019 07:36:20 GMT",
            telephone_number: "0758939187",
            user_id: 10,
            username: "crycetrulytest",
          },
        },
      },
    ];
    const valiData = {
      email: "jerry@gmail.com",
      password: "Roselyn123",
    };
    return store.dispatch(login(valiData, props)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("retrieves an error message", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requests = moxios.requests.mostRecent();
      requests.respondWith({
        status: 404,
        response: {
          message: "email or password is invalid",
          status: "Failed",
        },
      });
    });
    const expectedActions = [
      { type: "SOMETHING_LOADING" },
      {
        payload: { id: "LOGIN_FAIL", msg: "email or password is invalid", status: 404 },
        type: "GET_ERRORS",
      },
      { type: "LOGIN_FAIL" },
    ];
    const invalidData = {
      email: "",
      password: "",
    };
    return store.dispatch(login(invalidData, props)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("logs out a user successfully", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          msg: "You have successfuly logged out",
          status: "Success",
          id: LOGOUT_SUCCESS,
        },
      });
    });
    const expectedActions = [
      {
        payload: {
          id: "LOGOUT-SUCCESS",
          msg: "You have successfuly logged out",
          status: "Success",
        },
      },
      { type: "ADD_MESSAGE" },
      { type: "LOGOUT_SUCCESS" },
    ];

    store.dispatch(logout(props));
    expect(store.getActions()).toBeDefined();
  });

  it("Should Register A User successfully", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 201,
        response: {
          message: "Please visit your email to verify your account",
          status: "Success",
        },
      });
    });
    const expectedActions = [
      { type: "SOMETHING_LOADING" },
      {
        payload: {
          id: "LOGOUT_SUCCESS",
          msg: "You have successfuly logged out",
          status: "Success",
        },
        type: "REGISTER_SUCCESS",
      },
      {
        payload: {
          id: "LOGOUT-SUCCESS",
          msg: "Account created successfully,please check your email to activate your account",
          status: "Success",
        },
        type: "ADD_MESSAGE",
      },
    ];

    const registerData = {
      email: "aacryce@gmaAil.com",
      password: "passwordd",
      username: "testusername",
      phone_number: "07567875855",
      fullname: "geosteady",
    };
    return store.dispatch(register(registerData, props)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("Should fetch a user", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          email: "aacryce@gmaAil.com",
          password: "passwordd",
          username: "testusername",
          phone_number: "07567875855",
          fullname: "geosteady",
        },
      });
    });
    const expectedActions = [
      { type: "USER_LOADING" },
      {
        payload: { message: "Please visit your email to verify your account", status: "Success" },
        type: "USER_LOADED",
      },
    ];
    return store.dispatch(loadUser()).then(() => {
      expect(store.getActions()).toBeDefined();
    });
  });
});
