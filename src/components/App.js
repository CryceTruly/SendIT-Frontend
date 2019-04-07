import React, {
    Component
} from "react";
import {
    Provider
} from "react-redux";
import {
    Container
} from "reactstrap";
import {
    BrowserRouter as Router, Switch, Link, Route
} from "react-router-dom";
import store from "../Store";
import Parcels from "./Parcels";
import Navbar from "./shared/Navbar";
import {
    loadUser
} from "../actions/authActions";
import Login from "./Login";
import RegisterComponent from "./Register";
import PrivateRoute from "./common/PrivateRoute";
import NewOrder from './NewOrder'
import ParcelDetails from "./ParcelDetails";
export class App extends Component {

    componentDidMount(){
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Router>
                <Provider store={store}>

                    <Navbar />
                    <Container>
                        <p />
                        <Switch>
                        <PrivateRoute exact path="/" component={Parcels} />
                        <Route exact path="/login" component={Login} />
                        <PrivateRoute exact path="/details" component={ParcelDetails}></PrivateRoute>
                        <PrivateRoute exact path="/new" component={NewOrder} />
                        <Route exact path="/register" component={RegisterComponent} /></Switch>

                    </Container>
                </Provider>
            </Router>





        );
    }
}
export default App;
