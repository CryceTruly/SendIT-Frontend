import React from "react";
import { Row } from "reactstrap";
import Spinner from "./Spinner";

const PasswordChangeView = (props) => {
  const {
    onChange, onSubmit, msg, auth, 
  } = props;

  return (
    <Row>
      <div className="col-md-3" />
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Please enter your desired new password</h5>
            <form onSubmit={onSubmit} autoComplete="off">
              <div className="form-group">
                <label htmlFor="exampleInputpassword">Password</label>

                {msg ? <div className="alert alert-danger">{msg}</div> : ""}

                <input
                  type="password"
                  className="form-control"
                  id="exampleInputpassword"
                  name="password"
                  onChange={onChange}
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
                    onChange={onChange}
                    aria-describedby="passwordHelp"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={auth.reset_loading || msg !== null}
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

export default PasswordChangeView;
