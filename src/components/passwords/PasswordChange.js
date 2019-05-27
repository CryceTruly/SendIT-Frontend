import React, { Component } from "react";
import { Row } from "reactstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updatePassword } from "../../actions/authActions";
import Spinner from "../../views/Spinner";

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
      <Row>
        <div className="col-md-3" />
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Please enter your desired new password</h5>
              <form onSubmit={this.onSubmit} autoComplete="off">
                <div className="form-group">
                  <label htmlFor="exampleInputpassword">Password</label>

                  {this.state.msg ? <div className="alert alert-danger">{this.state.msg}</div> : ""}

                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputpassword"
                    name="password"
                    onChange={this.onChange}
                    aria-describedby="passwordHelp"
                    placeholder="Enter Password"
                  />
                  <div className="form-group">
                    <label htmlFor="exampleInputpassword1">Password Confirmation</label>

                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputpassword1"
                      name="password_confirm"
                      onChange={this.onChange}
                      aria-describedby="passwordHelp"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={auth.reset_loading || this.state.msg !== null}
                  onClick={this.onClick}
                  className="btn btn-primary"
                >
                  {auth.reset_loading ? "Please wait" : "Submit"}
                </button>

                {auth.reset_loading ? <Spinner /> : null}
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-3" />
      </Row>
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
