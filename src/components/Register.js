import { connect } from "react-redux";
import React, { Component } from "react";
import { clearErrors } from "../actions/errorActions";
import { register } from "../actions/authActions";
import Register from "../views/Register";

export class RegisterComponent extends Component {
  state = {
    fullname: "",
    email: "",
    password: "",
    phone_number: "",
    username: "",
    msg: null,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      /* istanbul ignore next */
      if (error.id === "REGISTER_FAIL") {
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
    const {
      username, fullname, phone_number, email, password, password_comfirm,
    } = this.state;
    // Create user object
    const newUser = {
      username,
      email,
      password,
      phone_number,
      fullname,

    };

    if (password !== password_comfirm) {
      this.setState({ msg: "Passwords donot match" });
    } else
    /* istanbul ignore next */{
      this.setState({ msg: null });
      this.props.register(newUser, this.props);
    }
  };

  render() {
    return (
      <Register
        processing={
          this.props.error.processing}
        msg={this.state.msg}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}
export const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.errors,
});

export default connect(mapStateToProps, { register, clearErrors })(RegisterComponent);
