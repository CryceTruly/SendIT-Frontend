import { combineReducers } from "redux";
import parcelReducer from './parcelReducer';
import authReducer from './authReducer';
import errorReducer from './errorsReducer';

export default combineReducers({
    parcels:parcelReducer,
    errors:errorReducer,
    auth:authReducer
})