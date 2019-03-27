import React, {
    Component
} from "react";
import {
    Provider
} from 'react-redux';
import {
    Container
} from "reactstrap";
import store from "../Store";
import Parcels from './Parcels';
import Navbar from "./shared/Navbar";
import {
    loadUser
} from "../actions/authActions";
import {
    BrowserRouter as Router, Switch, Link, Route
} from 'react-router-dom'
import About from "./About";
import Login from './Login';
import RegisterComponent from './Register';
export class App extends Component {

    componentDidMount(){
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Router>
            <Provider store = {store} >

             <Navbar/>
            <Container >
            <p> </p>

            <Route exact path="/" component={Parcels}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/parcels" component={Parcels}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/register" component={RegisterComponent}></Route>
               </Container>
             </Provider>
            </Router>





        );
    }
}
export default App;