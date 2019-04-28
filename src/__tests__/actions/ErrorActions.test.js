import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { clearErrors, returnErrors, addError } from "../../actions/errorActions";
import { GET_ERRORS, CLEAR_ERRORS, ADD_MESSAGE } from "../../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Error actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should clear errors", () => {
    const store = mockStore({});
    const expectedActions = [
      { type: "CLEAR_ERRORS" },
    ];
    store.dispatch(clearErrors());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should clear errors", () => {
    const store = mockStore({});
    const expectedActions = [
      { type: "CLEAR_ERRORS" },
    ];
    store.dispatch(clearErrors());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should add an error message", () => {
    const store = mockStore({});
    const expectedActions = [
      { type: "ADD_MESSAGE" },
    ];
    store.dispatch(addError());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should returnErrors", () => {
    const store = mockStore({});
    const expectedActions = [{ payload: { id: null, msg: { id: "FAILED", msg: "invalid stuff", status: 200 }, status: undefined }, type: "GET_ERRORS" }];
    const data = {
      msg: "invalid stuff", status: 200, id: "FAILED",
    };
    store.dispatch(returnErrors(data));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
