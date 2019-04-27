import Axios from "axios";
import {ADDING_PARCEL,ADD_PARCEL_SUCCESS,ADD_PARCEL_FAIL,GET_PARCELS,GET_PARCEL
} from "./types";
import {returnErrors} from "./errorActions";
import BASE_URL from "../constants";

export const getParcels = () => dispatch => {
     Axios.get(`${BASE_URL}/users/${localStorage.getItem("user_id")}/parcels`, {

        headers: {
            "Authorization": `Bearer ${localStorage.getItem("auth_token")}`
        }
    }).then(res =>

        dispatch({
            type: GET_PARCELS,
            payload: res.data.parcels
        })
    ).catch(error => console.log(error)

    );

    return {
        type: GET_PARCELS
    };
};

export const getParcel = () => dispatch => {
    Axios.get(`${BASE_URL}/parcels/1`, {

       headers: {
           "Authorization": `Bearer ${localStorage.getItem("auth_token")}`
       }
   }).then(res =>

       dispatch({
           type: GET_PARCEL,
           payload: res.data.parcel
       })
   ).catch(error => console.log(error)

   );

   return {
       type: GET_PARCEL
   };
};



export const createParcel = (data,routes)=> dispatch => {

console.log(data);

    dispatch({
        type:ADDING_PARCEL
    })
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${localStorage.getItem("auth_token")}`
        }
    };
    const body = data;

    Axios
        .post(`${BASE_URL}/parcels`, body,config)
        .then(res => {
                returnErrors(null, null,null)
                dispatch({
                    type: ADD_PARCEL_SUCCESS,
                    payload: res.data
                });
                routes.history.push("/");

        })
        .catch(err => {
            dispatch(
                returnErrors(err.response.data.message, err.response.status, "ADD_PARCEL_FAIL")
            );
            dispatch({
                type: ADD_PARCEL_FAIL
            });
        });
}