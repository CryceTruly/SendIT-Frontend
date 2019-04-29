import React from "react";
import PropTypes from "prop-types";
import {
  Card, CardBody, CardTitle, Row, Form, FormGroup, Label, Input, Button, Alert,
} from "reactstrap";
import Spinner from "./Spinner";

const NewParcel = (props) => {
  const {
    errorId, errorMessage, onChange, isAdding, onSubmit,
  } = props;
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle />
          <CardTitle><strong>Add a new Parcel Request.</strong></CardTitle>
          <Form onSubmit={onSubmit}>
            {errorId === "ADD_PARCEL_FAIL" ? (<Alert className="alert-danger">{errorMessage}</Alert>) : ""}
            <Row>
              <div className="col-md-6">
                <FormGroup>
                  <Label for="pickup">Pickup Location</Label>
                  <Input type="text" name="pickup" id="pickup" placeholder="Pickup location" required className="mb-3" onChange={onChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="destination">Destination address</Label>
                  <Input type="text" name="destination" id="destination" required placeholder="Destination Location" className="mb-3" onChange={onChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="phoneNumber">Recipient Phone Number</Label>
                  <Input type="text" name="phoneNumber" id="phoneNumber" required placeholder="phoneNumber" className="mb-3" onChange={onChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="remail">Recipient Email</Label>
                  <Input type="email" name="remail" id="remail" required placeholder="Email" className="mb-3" onChange={onChange} />
                </FormGroup>

              </div>
              <div className="col-md-6">
                <FormGroup>
                  <Label for="rfullName">Recipient Fullname</Label>
                  <Input type="text" name="rfullName" id="rfullName" required placeholder="" className="mb-3" onChange={onChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Parcel Description</Label>
                  <Input type="description" name="description" required id="description" placeholder="" className="mb-3" onChange={onChange} />
                </FormGroup>
                <FormGroup>
                  <FormGroup>
                    <Label for="qty">Quantity </Label>
                    <Input type="number" name="qty" id="qty" required placeholder="" className="mb-3" onChange={onChange} />
                    {" "}
                  </FormGroup>
                  <Label for="weight">Weight </Label>
                  <Input type="number" name="weight" id="weight" required className="mb-3" onChange={onChange} />
                  {" "}
                </FormGroup>
                {isAdding ? (<Spinner />) : null }
                <Button color="dark" disabled={isAdding} style={{ marginTop: "2rem" }} block>
                  {isAdding ? "Please wait" : "Submit"}
                </Button>
              </div>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default NewParcel;
