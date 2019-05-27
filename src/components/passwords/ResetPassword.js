import React, { Component } from "react";
import { Row } from "reactstrap";
import { connect } from "react-redux";
import { requestResetEmail } from "../../actions/authActions";
import Spinner from "../../views/Spinner";

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
        console.log(errors.msg);

        this.setState({ msg: errors.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (!this.validateEmail(this.state.email)) {
      this.setState({ msg: "Email format is invalid" });
    } else {
      this.setState({ msg: null });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;
    this.props.requestResetEmail(email);
  };

  validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  render() {
    const { auth, errors } = this.props;

    return (
      <Row>
        <div className="col-md-3" />
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Please enter your email,to get reset instructions</h5>
              <form onSubmit={this.onSubmit} autoComplete="off">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>

                  {this.state.msg ? <div className="alert alert-danger">{this.state.msg}</div> : ""}

                  {auth.messages.length ? (
                    <div className="alert alert-success">{auth.messages[0]}</div>
                  ) : (
                    ""
                  )}

                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="email"
                    onChange={this.onChange}
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Please provide an email you use for your account.
                  </small>
                </div>
                <button
                  type="submit"
                  disabled={auth.reset_loading}
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
  { requestResetEmail },
)(ResetPassword);
