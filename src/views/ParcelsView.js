import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Card,
  CardBody,
  CardTitle, Container,
  Table,
} from "reactstrap";
import ParcelItem from "./ParcelItem";
import Profile from "../components/Profile";

const ParcelsView = (props) => {
  const { user, parcels } = props;
  return (
    <div>
      <Row>
        <div className="col-md-4">
          <Profile />
        </div>
        <div className="col-md-8">
          <Card>
            <CardBody>
              <CardTitle> My Parcels </CardTitle>
              <Table className="table">
                <thead>
                  <tr>
                    <th> Order</th>
                    <th>Status</th>
                    <th> Created</th>
                      <th></th>
                  </tr>
                </thead>

                <tbody>
                  {
                    parcels.map(parcel => (
                      <ParcelItem key={parcel.parcel_id} data={parcel} />
                    ))
                  }
                </tbody>

              </Table>

            </CardBody>
          </Card>
        </div>
      </Row>
    </div>

  );
};

export default ParcelsView;
