import React from "react";
import PropTypes from "prop-types";
import {
  Button, Card, CardImg, CardBody, CardSubtitle, CardText, CardTitle,
} from "reactstrap";

const ProfileView = (props) => {
  const { user, parcels } = props;
  return (
    <center>
      <div className="card mx-auto">
        <div className="card-body pt-5">
          <img src={user ? user.imageUrl : ""} alt="" height="150" className="rounded-circle my-4" />
          <p className="card-text">
            {" "}
FullName:
            <strong>{user ? user.fullname : ""}</strong>
          </p>
          <p className="card-text">
            {" "}
Username:
            <strong>{user ? user.username : ""}</strong>
          </p>
          <p className="card-text">
Email:
            <strong>{user ? user.email : ""}</strong>
          </p>
          <p className="card-text">
Joined:
            <strong>{user ? user.joined : ""}</strong>
          </p>
          <Button className="btn-success">Edit  Profile</Button>
        </div>
      </div>
      <br />
      {" "}
      <div>
        <Card>
          <CardBody>
            <CardTitle>Statistics</CardTitle>
          </CardBody>
          <h6>
All orders
            <span className="badge badge-info">
              {parcels.length
              }
            </span>
          </h6>
          <h6>
Delivered
            <span className="badge badge-info">
              {parcels.filter(parcel => parcel.status === "delivered").length
              }
            </span>
          </h6>
          <h6>
Pending
            <span className="badge badge-info">
              {parcels.filter(parcel => parcel.status === "order_placed").length
              }
            </span>
          </h6>
        </Card>
      </div>
    </center>
  );
};

export default ProfileView;
