import React, {
    Component,
    Fragment
} from 'react'
import {
    getParcels
} from '../actions/parcelActions';
import PropTypes from 'prop-types';
import {
    connect
} from 'react-redux';
import ParcelItem from './ParcelItem';
import {
    Row,
    Card,
    CardBody,
    CardTitle,
    Table
} from 'reactstrap';
import {Link} from 'react-router-dom';
export class Parcels extends Component {

    componentDidMount() {
        this.props.getParcels();


    }

    render() {

        return ( <div>
            <Link to={'/about'}></Link>
            <Card >
            <CardBody >
            <CardTitle> Parcels </CardTitle>
            <Table>
            <thead>
            <tr>
            <th> Customer </th><th>Pickup Location</th> < th> Destination </th><td>Placed</td>
            </tr>
            </thead>

            <tbody > {
                this.props.parcels.map(parcel => (
                    <ParcelItem key = {parcel.parcel_id} data = {parcel}> </ParcelItem>

                ))
            }

            </tbody>

            </Table>

            </CardBody> </Card>

            </div>
        );
    }




}


const mapStateToProps = (state) => ({
    parcels: state.parcels.parcels
})


Parcels.propTypes = {
    getParcels: PropTypes.func.isRequired,
    parcels: PropTypes.array.isRequired
}
export default connect(mapStateToProps, {getParcels})(Parcels)