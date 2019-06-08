import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Row,
} from "reactstrap";

const LoginView = (props) => {
  const {
    errorId, errorMessage, onChange, onSubmit, processing, msg,message 
  } = props;
  return (
    <div>
      <Row>
        <div className="col-md-3" />
        <div className="col-md-6">
          <Card>
            <CardBody>
              <CardTitle>
                <strong>Login to SendIT.</strong>
              </CardTitle>
              <Form onSubmit={onSubmit}>
                {msg ? <Alert color="danger">{msg}</Alert> : message.length>3 ? (
                  <Alert color="info">Your Account is now set up,you can now log in</Alert>
                ) : null}
                {errorId === "LOGOUT-SUCCESS"? (
                  <Alert color="success">{errorMessage}</Alert>
                ) : null}
                
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="mb-3"
                    onChange={onChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder=""
                    className="mb-3"
                    onChange={onChange}
                  />
                  {processing ? (
                    <div className="d-flex text-primary justify-content-center">
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  ) : null}
                </FormGroup>
                <Link to="/reset_password" className="float-right my-1">
                  Forgot Password?
                </Link>
                {processing ? (
                  <Button disabled color="dark" style={{ marginTop: "1rem" }} block>
                    Please wait
                  </Button>
                ) : (
                  <Button color="dark" style={{ marginTop: "1rem" }} block>
                    Login
                  </Button>
                )}
                <p className="text-center mb-2 mt-2">
                  New to SendIT?
                  <span>
                    {" "}
                    <Link to="/register">Create an account</Link>
                  </span>
                </p>
              </Form>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-3" />
      </Row>
    </div>
  );
};

export default LoginView;
