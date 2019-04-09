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
import Dashboard from './Dashboard'
export class Parcels extends Component {

    componentDidMount() {
        this.props.getParcels();


    }

    render() {

        const { user } = this.props.auth;
        if(user && user.is_admin){
           return <Dashboard/>
        }else{
        return (

            <div>

<Row>
    <div className="col-md-5">
   <Profile/>
    </div>


    <div className="col-md-7">


    <Card>
                    <CardBody>
                        <CardTitle> My Parcels </CardTitle>
                        <Table className="table table-responsive table-condensed">
                            <thead>
                                <tr>
                                    <th> Order</th>
                                    <th>Status</th>
                                    <th> Created</th>
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
                </Card>
                </div>


</Row>





            </div>
        );
    }




}
}


export const mapStateToProps = (state) => ({
    parcels: state.parcels.parcels,
    auth:state.auth
});


Parcels.propTypes = {
    getParcels: PropTypes.func.isRequired,
    parcels: PropTypes.array.isRequired
};
export default connect(mapStateToProps, {getParcels})(Parcels);
