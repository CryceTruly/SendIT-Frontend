import React, {
    Component
} from "react";
import {
    Provider
} from 'react-redux';
import {
    Jumbotron,
    Button,
    Container
} from "reactstrap";
import store from "../Store";
import Parcels from './Parcels';
import Navbar from "./shared/Navbar";
import {
    loadUser
} from "../actions/authActions";
import {
    BrowserRouter
} from 'react-router-dom'
import {
    Route,
    Link
} from 'react-router-dom'
/**
 * App
 */
export class App extends Component { // eslint-disable-line react/prefer-stateless-function

    render() {
        return (

            <
            Provider store = {
                store
            } >

            <
            Navbar / >>
            <
            Container >
            <
            p > < /p> <
            Parcels / >

            <
            /Container>





            <
            /Provider>


        );
    }
}
export default App;