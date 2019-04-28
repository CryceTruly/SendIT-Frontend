import Axios from "axios";
import {
  ADDING_PARCEL, ADD_PARCEL_SUCCESS, ADD_PARCEL_FAIL, GET_PARCELS, GET_PARCEL,
} from "./types";
import { returnErrors } from "./errorActions";
import BASE_URL from "../constants";

export const getParcels = () => dispatch => Axios.get(`${BASE_URL}/users/${localStorage.getItem("user_id")}/parcels`, {

  headers: {
    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
  },
}).then(res => dispatch({
  type: GET_PARCELS,
  payload: res.data.parcels,
}));

export const getParcel = id => dispatch => Axios.get(`${BASE_URL}/parcels/${id}`, {

  headers: {
    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
  },
}).then(res => dispatch({
  type: GET_PARCEL,
  payload: res.data.parcel,
}));

export const createParcel = (data, routes) => (dispatch) => {
  dispatch({
    type: ADDING_PARCEL,
  });
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    },
  };
  const body = data;

  return Axios
    .post(`${BASE_URL}/parcels`, body, config)
    .then((res) => {
      dispatch({
        type: ADD_PARCEL_SUCCESS,
        payload: res.data,
      });
      routes.history.push("/");
    })
    .catch(
      /* istanbul ignore next */(err) => {
        dispatch(
          returnErrors(err.response.data.message, err.response.status, "ADD_PARCEL_FAIL"),
        );
        dispatch({
          type: ADD_PARCEL_FAIL,
        });
        console.log(err);

      },
    );
};
