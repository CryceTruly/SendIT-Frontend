import { combineReducers } from "redux";
import parcelReducer from './parcelReducer';


export default combineReducers({
    parcels:parcelReducer
})