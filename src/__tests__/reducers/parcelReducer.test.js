import {
  GET_PARCELS,
  ADDING_PARCEL,
  ADD_PARCEL_FAIL,
  ADD_PARCEL_SUCCESS,
} from "../../actions/types";


import parcelReducer from "../../reducers/parcelReducer";

test("initial parcels", () => {
  const state = parcelReducer(undefined, {});
  expect(state).toEqual({
    parcels: [],
    isAdding: false,
  });
});

describe("Parcels Reducer Tests", () => {
  const initialState = {
    parcels: [],
    isAdding: false,
  };

  it("should Load parcels", () => {
    const successAction = {
      type: GET_PARCELS,
      payload: [],
    };

    const successState = {
      parcels: [],
      isAdding: false,
    };
    expect(parcelReducer(initialState, successAction)).toEqual(successState);
  });

  it("should Load when adding a parcel", () => {
    const dispatchedAction = {
      type: ADDING_PARCEL,
    };
    const newState = {
      isAdding: true,
      parcels: [],
    };
    expect(parcelReducer(initialState, dispatchedAction)).toEqual(newState);
  });

  it("should add a parcel", () => {
    const dispatchedAction = {
      type: ADD_PARCEL_SUCCESS,
      payload: {
        id: 1,
        added: "now",
      },
    };
    const newState = {
      isAdding: false,
      parcels: {
        id: 1,
        added: "now",
      },
    };
    expect(parcelReducer(initialState, dispatchedAction)).toEqual(newState);
  });

  it("should fail to add a parcel", () => {
    const dispatchedAction = {
      type: ADD_PARCEL_FAIL,
      payload: "something went wrong",
    };
    const newState = {
      msg: "something went wrong",
      isAdding: false,
      parcels: [],
    };
    expect(parcelReducer(initialState, dispatchedAction)).toEqual(newState);
  });
});
