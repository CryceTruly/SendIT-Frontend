import {GET_PARCELS,ADD_PARCEL} from '../actions/types';

const initialState={

    parcels:[
        {"destination_address":"Mbarara","pick_up_address":"Kampala"},
       {
           "destination_address": "Mbarara",
           "pick_up_address": "Kampala"
       },
        {
            "destination_address": "Mbarara",
            "pick_up_address": "Kampala"
        }
    ]


}
export default function(state=initialState,action){
    switch (action.type) {
        case GET_PARCELS:
        return {
            ...state
        }
        default:
            return state
    }
}