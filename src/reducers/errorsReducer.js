import { GET_ERRORS, CLEAR_ERRORS,ADD_MESSAGE, SOMETHING_LOADING } from "../actions/types";

const initialState = {
    msg: null,
    status: null,
    id: null,
    processing:null
};

export default function(state = initialState, action) {
    switch(action.type) {
    case GET_ERRORS:
        return {
            msg: action.payload.msg,
            status: action.payload.status,
            id: action.payload.id
        };
    case CLEAR_ERRORS:
        return {
            msg: null,
            status: null,
            id: null,
            processing:null
        };
        case ADD_MESSAGE:
        return {
            msg: action.payload.msg,
            status: action.payload.status,
            id: action.payload.id
        };
        case SOMETHING_LOADING:
        return {
            ...state,
            processing:true
        };

    default:
        return state;
    }
}