import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../../views/Navbar";
import { logout } from "../../actions/authActions";

export class Navigationbar extends Component {
  
    onLogoutClick=() => {
      this.props.logout(this.props);
    }

    render() {
      const { isAuthenticated, user } = this.props.auth;
      return (
        <Nav isAuthenticated={isAuthenticated} user={user} onLogoutClick={this.onLogoutClick} />
      );
    }
}

export const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navigationbar);
