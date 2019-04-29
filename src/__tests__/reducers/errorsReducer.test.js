import {
  GET_ERRORS, CLEAR_ERRORS, ADD_MESSAGE, SOMETHING_LOADING,
} from "../../actions/types";


import errorsReducer from "../../reducers/errorsReducer";

test("initial errors", () => {
  const state = errorsReducer(undefined, {});
  expect(state).toEqual({
    msg: null,
    status: null,
    id: null,
    processing: null,
  });
});

describe("Errors Reducer Tests", () => {
  const initialState = {
    msg: null,
    status: null,
    id: null,
    processing: null,
  };

  it("should Load errors", () => {
    const successAction = {
      type: GET_ERRORS,
      payload: {
        msg: "invalid login",
        status: 400,
        id: 1,
      },
    };

    const successState = {
      msg: "invalid login",
      status: 400,
      id: 1,
    };
    expect(errorsReducer(initialState, successAction)).toEqual(successState);
  });

  it("should clear errors", () => {
    const dispatchedAction = {
      type: CLEAR_ERRORS,
    };
    const newState = {
      msg: null,
      status: null,
      id: null,
      processing: null,

    };
    expect(errorsReducer(initialState, dispatchedAction)).toEqual(newState);
  });

  it("should add an error message", () => {
    const dispatchedAction = {
      type: ADD_MESSAGE,

      payload: {
        msg: "invalid login",
        status: 400,
        id: 1,

      },
    };
    const newState = {
      msg: "invalid login",
      status: 400,
      id: 1,
    };
    expect(errorsReducer(initialState, dispatchedAction)).toEqual(newState);
  });

  it("should process errors", () => {
    const dispatchedAction = {
      type: SOMETHING_LOADING,
    };
    const newState = {
      msg: null,
      status: null,
      id: null,
      processing: true,
    };
    expect(errorsReducer(initialState, dispatchedAction)).toEqual(newState);
  });
});
