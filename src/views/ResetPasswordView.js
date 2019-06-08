import React from "react";
import { Row } from "reactstrap";
import Spinner from "./Spinner";

const ResetPasswordView = (props) => {
  const {
    onChange, onSubmit, auth, msg,
  } = props;

  return (
    <Row>
      <div className="col-md-3" />
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Please enter your email to get reset instructions</h5>
            <form onSubmit={onSubmit} autoComplete="off">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>

                {msg ? <div className="alert alert-danger">{msg}</div> : ""}

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
                  required
                  onChange={onChange}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please provide an email you use for your account.
                </small>
              </div>
             
              <button
                type="submit"
                disabled={msg && msg.length>0||auth.reset_loading }
                onClick={onSubmit}
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
};

export default ResetPasswordView;
