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

                        <PrivateRoute exact path="/" component={Parcels} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/parcels" component={Parcels} />
                        <Route exact path="/register" component={RegisterComponent} />
                    </Container>
                </Provider>
            </Router>





        );
    }
}
export default App;
