import {createStore,applyMiddleware,compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const midddleWare=[thunk];
const initialState={};
const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...midddleWare)));


export default store;
