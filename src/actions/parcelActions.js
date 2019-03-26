import {
    GET_PARCELS,
    ADD_PARCEL
} from './types';
import Axios from 'axios';

export const getParcels = () => dispatch => {
    console.log('items connected from redux');

    Axios.get("http://127.0.0.1:3000/api/v2/users/11/parcels", {

        headers: {
            "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTM2ODA3NzEsInVzZXJfaWQiOjExLCJlbWFpbCI6InRydWx5eSIsImlzX2FkbWluIjp0cnVlfQ.qEFKj8j6qILA_UfytEMXO9rG7yrzcuA0OAcOlefFGKk`
        }
    }).then(res =>

        dispatch({
            type: GET_PARCELS,
            payload: res.data.parcels
        })
    ).catch(error => console.log(error)

    )

    return {
        type: GET_PARCELS
    }
}