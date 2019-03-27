import {createStore,applyMiddleware,compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const midddleWare=[thunk]
const initialState={}
const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...midddleWare)))


export default store;
