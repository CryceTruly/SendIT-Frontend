import React, { Component } from "react";
import { Row } from "reactstrap";
import { connect } from "react-redux";
import { requestResetEmail } from "../../actions/authActions";
import ResetPasswordView from "../../views/ResetPasswordView";

export class ResetPassword extends Component {
  state = {
    email: "",
    msg: null,
  };

  componentDidUpdate(prevProps) {
    const { errors } = this.props;
    if (errors !== prevProps.errors) {
      /* istanbul ignore next */
      if (errors.id === "SENDING_RESET_EMAIL_FAILED") {
      this.setState({ msg: errors.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    if (!this.validateEmail(this.state.email)) {
      this.setState({ msg: "Please provide a valid email" });
    }else{
      this.setState({ msg: null});
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;

    if (!this.validateEmail(this.state.email)) {
      this.setState({ msg: "Please provide a valid email" });
      return;
    } else {
      this.props.requestResetEmail(email);
    }
    
    
  };

  validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  render() {
    const { auth, errors } = this.props;

    return (
      <ResetPasswordView
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
  { requestResetEmail },
)(ResetPassword);
