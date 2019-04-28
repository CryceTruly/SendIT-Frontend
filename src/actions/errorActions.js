
import { GET_ERRORS, CLEAR_ERRORS, ADD_MESSAGE } from "./types";

// RETURN ERRORS
export const returnErrors = (msg, status, id = null) => ({
  type: GET_ERRORS,
  payload: { msg, status, id },
});

// CLEAR ERRORS
export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

// ADD_MESSAGE

export const addError = () => ({
  type: ADD_MESSAGE,
});
