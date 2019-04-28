import React from "react";
import {
  Row,
  Card,
  CardBody,
  CardTitle, Button,
  Table,
} from "reactstrap";

import Moment from "react-moment";
import ReactTimeAgo from "react-time-ago";
import { Link } from "react-router-dom";

export default function ParcelItem(props) {
  const {
    parcel_id,
    created,
    stats,
  } = props.data;
  const detail = props.data;
  return (
    <tr>
      <td>
        {parcel_id}
      </td>
      <td>{stats.status}</td>
      <td>
        {<Moment fromNow>{created}</Moment>}
      </td>
      <td>
        <Link to={{ pathname: "/details", state: { data: detail } }}><i class="fa fa-arrow-alt-circle-right"></i></Link>
      </td>
    </tr>

  );
}
