import React from 'react'
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Table
} from 'reactstrap';

export default function ParcelItem(props) {
  console.log(props);

  const {
    parcel_id,
    sender_email,
    pickup_address,
    destination_address,
    placed
  } = props.data;
  return (



    <
    tr >
    <
    td > {
      sender_email
    } < /td>  <td>{pickup_address}</td > < td > {
      destination_address
    } < /td> <
    td > {
      placed
    } < /td></tr >

  )
}