import React, { Component } from "react";
import { Row } from "reactstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updatePassword } from "../../actions/authActions";
import Spinner from "../../views/Spinner";
import PasswordChangeView from "../../views/PasswordChangeView";

export class PasswordChange extends Component {
  state = {
    password: "",
    password_confirm: "",
    msg: null,
  };

  componentDidUpdate(prevProps) {
    const { errors } = this.props;
    if (errors !== prevProps.errors) {
      /* istanbul ignore next */
      if (errors.id === "SENDING_RESET_EMAIL_FAILED") {
        console.log(errors.msg);

        this.setState({ msg: errors.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (!this.validatePassword(this.state.password)) {
      this.setState({ msg: "Passwords should be atleast 6 characters" });
    } else if (
      this.state.password_confirm.length > 0
      && !this.doPasswordsMatch(this.state.password, this.state.password_confirm)
    ) {
      this.setState({ msg: "Passwords donot match" });
    } else {
      this.setState({ msg: null });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.doPasswordsMatch(this.state.password, this.state.password_confirm)) {
      this.setState({ msg: "Passwords donot match" });
    } else {
      this.setState({ msg: null });
    }

    const { password } = this.state;
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTkwNzg0MDYsInVzZXJfaWQiOjEwMCwiZW1haWwiOiJzZW5kaXRhZG1pbiIsImlzX2FkbWluIjp0cnVlfQ.0A4N-mxtJAYzDn59Y2qiaR_RCpir-TpmYFCmWa7OUyY";

    this.props.updatePassword(password, token);
  };

  validatePassword = password => password.length >= 6;

  doPasswordsMatch = (password1, password2) => password1 === password2;

  render() {
    const { auth, errors } = this.props;
    if (auth.messages.length) {
      return <Redirect to="/login?message=password reset success" />;
    }

    return (
      <PasswordChangeView
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        msg={this.state.msg}
        auth={auth}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(
  mapStateToProps,
  { updatePassword },
)(PasswordChange);
