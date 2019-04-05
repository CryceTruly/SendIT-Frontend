import React, {
    Component,
    Fragment
} from "react";
import PropTypes from "prop-types";
import {
    connect
} from "react-redux";
import {
    Row,
    Card,
    CardBody,
    CardTitle,Container,
    Table
} from "reactstrap";
import {Link} from "react-router-dom";
import {getParcels} from "../actions/parcelActions";
import ParcelItem from "./ParcelItem";
import Profile from './Profile'
export class Parcels extends Component {

    componentDidMount() {
        this.props.getParcels();


    }

    render() {

        return (
            <div>

<Row>
    <div className="col-md-4">
   <Profile/>
    </div>


    <div className="col-md-8">


    <Card>
                    <CardBody>
                        <CardTitle> My Parcels </CardTitle>
                        <Table className="table-responsive">
                            <thead>
                                <tr>
                                    <th> Order </th>
                                    <th>Status</th>
                                    {" "}
                                    <th> Created</th>
<th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.props.parcels.map(parcel => (
                                        <ParcelItem key={parcel.parcel_id} data={parcel} />

                                    ))
                                }

                            </tbody>

                        </Table>

                    </CardBody>
                    {" "}
                </Card>
                </div>


</Row>





            </div>
        );
    }




}


const mapStateToProps = (state) => ({
    parcels: state.parcels.parcels
});


Parcels.propTypes = {
    getParcels: PropTypes.func.isRequired,
    parcels: PropTypes.array.isRequired
};
export default connect(mapStateToProps, {getParcels})(Parcels);
