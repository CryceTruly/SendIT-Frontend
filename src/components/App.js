import React, { Component } from "react";
import {Provider} from 'react-redux';
import { Jumbotron, Button } from "reactstrap";
import store from "../Store";
import Parcels from './Parcels';
/**
 * App
 */
export class App extends Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <Provider store={store}>
            <div>
                <p>App started</p>
                <Parcels/>

                </div>
            </Provider>

        );
    }
}
export default App;
