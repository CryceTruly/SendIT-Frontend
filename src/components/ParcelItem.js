import React from "react";
import {
    Row,
    Card,
    CardBody,
    CardTitle,Button,
    Table
} from "reactstrap";

import Moment from 'react-moment';
import ReactTimeAgo from 'react-time-ago';
import {Link} from 'react-router-dom';
export default function ParcelItem(props) {

    const {
        parcel_id,
        sender_email,
        pickup_address,
        destination_address,
        placed,
        status
    } = props.data;
    return (
        <tr>
            <td>
                {
                    parcel_id
                }
            </td>
            <td>{status}</td>
            {" "}
            <td>
                {
                    <Moment fromNow>{placed}</Moment>

                }
            </td>
            <td>
                <Link className="btn btn-info" to="/details">Details</Link>
            </td>

        </tr>

    );
}
