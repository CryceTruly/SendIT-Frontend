import React from "react";
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
import Spinner from "./Spinner";

const Register = (props) => {
  const {
    onSubmit, onChange, processing, msg,
  } = props;
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle />
          <CardTitle><strong>Register an Account.</strong></CardTitle>
          <Form onSubmit={onSubmit}>
            {msg ? <Alert color="danger">{msg}</Alert> : null}
            <Row>
              <div className="col-md-6">
                <FormGroup>
                  <Label for="fullname">Fullname</Label>
                  <Input type="text" name="fullname" id="fullname" placeholder="Full Name" required className="mb-3" onChange={onChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" required placeholder="Email" className="mb-3" onChange={onChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="phone_number">Phone Number</Label>
                  <Input type="text" name="phone_number" id="phone_number" required placeholder="phone_number" className="mb-3" onChange={onChange} />
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input type="text" name="username" id="username" required className="mb-3" onChange={onChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="password" required id="password" className="mb-3" onChange={onChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="password_comfirm">Confirm Password </Label>
                  <Input type="password" name="password_comfirm" id="password_comfirm" required placeholder="" className="mb-3" onChange={onChange} />
                  {processing ? (
                    <Spinner />
                  ) : null
                  }
                </FormGroup>
                <Button disabled={processing} color="dark" style={{ marginTop: "2rem" }} block>
                  {!processing ? "Register" : "Please wait..."}
                </Button>
              </div>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
