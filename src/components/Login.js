import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoginView from "../views/Login";
import { clearErrors } from "../actions/errorActions";
import { login } from "../actions/authActions";

export class Login extends Component {
  state = {
    email: "",
    password: "",
    msg: null,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for auth error
      /* istanbul ignore next */
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    // Create user data
    const newUser = {
      email,
      password,
    };

    // Attempt to login
    this.props.login(newUser, this.props);
  };

  render() {
    return (
      <LoginView
        msg={this.state.msg}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        errorMessage={this.props.error.msg}
        errorId={this.props.error.id}
        processing={this.props.error.processing}
      />
    );
  }
}
export const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.errors,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { login, clearErrors },
)(Login);
