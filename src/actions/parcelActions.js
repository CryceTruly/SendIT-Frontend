import Axios from "axios";
import {
    GET_PARCELS,
    GET_PARCEL,
} from "./types";

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
