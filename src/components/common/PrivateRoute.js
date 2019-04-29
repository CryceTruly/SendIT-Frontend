import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const PrivateRoute = ({ component: Component, auth, ...rest }) => (

  <Route
    {...rest}
    render={ /* istanbul ignore next */(props) => {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        return <Redirect to="/login" />;
      }
      return <Component {...props} />;
    }}
  />
);

export const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
