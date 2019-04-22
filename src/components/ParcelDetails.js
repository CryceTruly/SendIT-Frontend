import React, { Component } from 'react'
export default class ParcelDetails extends Component {

  render() {

    const { data } = this.props.location.state

    return (
      <div className="row">
           <div className="col-md-12">
           <div className="card mt-4 block">
          <div className="card-header">
            Parcel Details
          </div>
          <div className="card-body">


          <ul className="list-group">
  <li className="list-group-item"><strong>PickUp Location</strong><span className="float-right">{data.addresses.pickup}</span></li>
  <li className="list-group-item"><strong>Destination Location</strong><span className="float-right">{data.addresses.destination}</span></li>
  <li className="list-group-item"><strong>Current Location</strong><span className="float-right">{data.addresses.current}</span></li>
  <li className="list-group-item"><strong>Recipient Name</strong><span className="float-right">{data.recipient.fullname}</span></li>
  <li className="list-group-item"><strong>Recipient Email</strong><span className="float-right">{data.recipient.email}</span></li>
  <li className="list-group-item"><strong>Recipient Phone</strong><span className="float-right">{data.recipient.phone_number}</span></li>
  <li className="list-group-item active"><strong>Stats</strong></li>
  <li className="list-group-item"><strong>Price</strong><span className="float-right">{data.stats.price}</span></li>
  <li className="list-group-item"><strong>Qty</strong><span className="float-right">{data.stats.quantity}</span></li>
  <li className="list-group-item"><strong>Trip Distance</strong><span className="float-right">{data.stats.tripDistance} Km</span></li>
  <li className="list-group-item"><strong>Weight</strong><span className="float-right">{data.stats.weight}</span></li>
  <li className="list-group-item"><strong>Status</strong><span className="float-right">{data.stats.status}</span></li>
</ul>
<div className="options my-5">
<button className="btn btn-info">Update Destistination</button> <button className="btn btn-warning">Cancel Order</button>
</div>
</div>
</div>
</div>
</div>
    )
  }
}
