import Axios from "axios";
import {
    GET_PARCELS,
    ADD_PARCEL
} from "./types";

export const getParcels = () => dispatch => {
    console.log("items connected from redux");

    Axios.get(`http://127.0.0.1:3000/api/v2/users/${localStorage.getItem("user_id")}/parcels`, {

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
