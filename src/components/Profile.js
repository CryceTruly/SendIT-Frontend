import React, { Component } from 'react'
import {Button,Card,CardImg,CardBody,CardSubtitle,CardText,CardTitle} from 'reactstrap';
import {connect} from 'react-redux';
class Profile extends Component {

    getStyle=()=>{
        return{
            color: 'blue',
            border:'2px solid black'
        }
    }
  render() {


    if(this.props.authState.isLoading){
       return <h3>Loading User...</h3>
    }else{
        const user = this.props.user;
        console.log(typeof(user));



return(
        <center>
        <div className="card mx-auto">
          <div className="card-body pt-5">
            <img src="https://avatars1.githubusercontent.com/u/20795487?s=400&v=4" height="200" className="rounded-circle" alt="profile-image"/>
             <h6 className="card-title mt-3">{1}</h6>
            <p className="card-text">{1}</p>
            <Button className="btn-success">Edit  Profile</Button>

</div>

</div>

<br>
</br> <div>
      <Card>
       <CardBody>
          <CardTitle>Statistics</CardTitle>
        </CardBody>

        <h6>All orders <span className="badge badge-info">5</span></h6><h6>Delivered <span  className="badge badge-info">5</span></h6><h6 >Undelivered <span className="badge badge-info">5</span></h6>
      </Card>
    </div>


</center>
  )
}
}
}
const mapStateToProps=(state)=>({
    authState:state.auth,
    user:state.auth.user
});
export default connect(mapStateToProps,{})(Profile)