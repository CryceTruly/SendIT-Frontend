import {
    GET_PARCELS,
    ADD_PARCEL
} from "../actions/types";

const initialState = {

    parcels: [],


};
export default function (state = initialState, action) {

    switch (action.type) {
    case GET_PARCELS:
        return {
            ...state,
            parcels: action.payload

        };
    default:
        return state;
    }
}