import React, { Component } from 'react'
import {getParcels} from  '../actions/parcelActions';
import  PropTypes  from 'prop-types';
import {connect} from 'react-redux';
export  class Parcels extends Component {

    componentDidMount(){
        this.props.getParcels();
    }
  render() {
    return (
      <div>
           <p className = "btn btn-group-lg btn-secondary">Hello and welcome to send it </p>


      </div>
    )
  }
}
const mapStateToProps=(state)=>({
    parcels:state.parcels
})


Parcels.propTypes={
    getParcels:PropTypes.func.isRequired,
    parcels:PropTypes.object.isRequired
}
export default connect(mapStateToProps,{getParcels})(Parcels)