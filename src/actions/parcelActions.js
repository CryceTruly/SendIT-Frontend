import {
    GET_PARCELS,
    ADD_PARCEL
} from './types';

export const getParcels=()=>{
    console.log('items connected from redux');

    return {
        type:GET_PARCELS
    }
}