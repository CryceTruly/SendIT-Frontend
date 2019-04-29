import React, { Component } from "react";
import { connect } from "react-redux";
import { createParcel } from "../actions/parcelActions";
import NewParcel from "../views/NewParcel";

export class NewOrder extends Component {
    state = {
      pickup: "",
      destination: "",
      weight: 0,
      qty: 0,
      phone_number: "",
      rfullName: "",
      remail: "",
      msg: null,
      description: "",
    };

      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

    onSubmit = (e) => {
      e.preventDefault();
      const {
        rfullName, destination, pickup, weight, qty, phoneNumber, remail, description,
      } = this.state;

      const NewOrder = {
        recipient_email: remail,
        weight: parseInt(weight),
        pickup_address: pickup,
        destination_address: destination,
        quantity: parseInt(qty),
        parcel_description: description,
        recipient_phone_number: phoneNumber,
        recipient_name: rfullName,
      };

      // Attempt to create
      this.props.createParcel(NewOrder, this.props);
    };

    render() {
      return (
        <NewParcel
          errorId={this.props.errors.id}
          isAdding={this.props.parcels.isAdding}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          errorMessage={this.props.errors.msg}
        />
      );
    }
}

export const mapStateToProps = state => ({
  errors: state.errors,
  parcels: state.parcels,
});

export default connect(mapStateToProps, { createParcel })(NewOrder);
