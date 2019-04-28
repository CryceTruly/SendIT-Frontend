import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileView from "../views/Profile";

export class Profile extends Component {
  render() {
    if (this.props.auth.isLoading) {
      return <h3>Loading User...</h3>;
    }
    const { user } = this.props.auth;
    return (
      <ProfileView
        parcels={this.props.parcels}
        user={user}
      />
    );
  }
}
export const mapStateToProps = state => ({
  auth: state.auth,
  parcels: state.parcels.parcels,
});
export default connect(mapStateToProps, {})(Profile);
