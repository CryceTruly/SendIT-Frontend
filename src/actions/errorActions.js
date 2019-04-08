
import { GET_ERRORS, CLEAR_ERRORS,ADD_MESSAGE } from "./types";

// RETURN ERRORS
export const returnErrors = (msg, status, id = null) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status, id }
    };
};

// CLEAR ERRORS
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};

//ADD_MESSAGE

export const addError = () => {
    return {
        type: ADD_MESSAGE
    };
};