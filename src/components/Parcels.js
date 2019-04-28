import React, {
  Component,
  Fragment,
} from "react";
import PropTypes from "prop-types";
import {
  connect,
} from "react-redux";
import { Link } from "react-router-dom";
import { getParcels } from "../actions/parcelActions";
import ParcelsView from "../views/ParcelsView";
import Dashboard from "./Dashboard";

export class Parcels extends Component {
  componentDidMount() {
    this.props.getParcels();
  }

  render() {
    const { user } = this.props.auth;


    if (user && user.is_admin) {
      return (

        <Dashboard />
      );
    }
    return (
      <ParcelsView parcels={this.props.parcels} user={user} />
    );
  }
}


export const mapStateToProps = state => ({
  parcels: state.parcels.parcels,
  auth: state.auth,
});


Parcels.propTypes = {
  getParcels: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, { getParcels })(Parcels);
