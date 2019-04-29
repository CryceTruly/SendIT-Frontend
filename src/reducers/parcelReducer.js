import {
  GET_PARCELS,
  ADDING_PARCEL,
  ADD_PARCEL_FAIL,
  ADD_PARCEL_SUCCESS,
} from "../actions/types";

const initialState = {
  parcels: [],
  isAdding: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
  case GET_PARCELS:
    return {
      ...state,
      parcels: action.payload,
    };
  case ADDING_PARCEL:
    return {
      ...state,
      isAdding: true,
    };
  case ADD_PARCEL_SUCCESS:
    return {
      ...state,
      parcels: action.payload,
      isAdding: false,
    };
  case ADD_PARCEL_FAIL:
    return {
      ...state,
      isAdding: false,
      msg: action.payload,
    };
  default:
    return state;
  }
}
