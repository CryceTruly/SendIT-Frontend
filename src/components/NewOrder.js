import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createParcel} from "../actions/parcelActions";
import {Card,CardBody,CardTitle,Row,Form,FormGroup,Label,Input,Button,Alert} from "reactstrap";
export class NewOrder extends Component {
    state = {
        pickup: '',
        destination: '',
        weight: 0,
        qty:0,
        phone_number:'',
        rfullName:'',
        remail:'',
        msg: null,
        description:""
      };



      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };






    onSubmit = e => {
      e.preventDefault();
      const { rfullName,destination,pickup, weight, qty,phone_number ,remail,description} = this.state;

      const NewOrder = {
        recipient_email:remail,
        weight:parseInt(weight),
        pickup_address:pickup,
        destination_address:destination,
        quantity:parseInt(qty),
        parcel_description:description,
        recipient_phone_number:phone_number,
        recipient_name:rfullName
      };

      // Attempt to create
      this.props.createParcel(NewOrder,this.props);
    };




  render() {
    return (
      <div>

         <Card>
        <CardBody>
          <CardTitle></CardTitle>

          <CardTitle><strong>Add a new Parcel Request.</strong></CardTitle>


            <Form onSubmit={this.onSubmit}>

{this.props.errors.id==="ADD_PARCEL_FAIL"?(<Alert className="alert-danger">{this.props.errors.msg}</Alert>):""}

            <Row>
              <div className="col-md-6">

              <FormGroup>
                <Label for='pickup'>Pickup Location</Label>
                <Input
                  type='text'
                  name='pickup'
                  id='pickup'
                  placeholder='Pickup location' required
                  className='mb-3'
                  onChange={this.onChange}
                />
                </FormGroup>


<FormGroup>
                <Label for='destination'>Destination address</Label>
                <Input
                  type='text'
                  name='destination'
                  id='destination' required
                  placeholder='Destination LOcation'
                  className='mb-3'
                  onChange={this.onChange}/>
                 </FormGroup>
                <FormGroup>
<Label for='phone_number'>Recipient Phone Number</Label>
                <Input
                  type='text'
                  name='phone_number'
                  id='phone_number' required
                  placeholder='phone_number'
                  className='mb-3'
                  onChange={this.onChange}
                />
                </FormGroup>
                <FormGroup>
<Label for='remail'>Recipient Email</Label>
                <Input
                  type='email'
                  name='remail'
                  id='remail' required
                  placeholder='Email'
                  className='mb-3'
                  onChange={this.onChange}
                />
                </FormGroup>

              </div>
               <div className="col-md-6">
<FormGroup>
  <Label for='rfullName'>Recipient Fullname</Label>
                <Input
                  type='text'
                  name='rfullName'
                  id='rfullName' required
                  placeholder=''
                  className='mb-3'
                  onChange={this.onChange}
                />
</FormGroup>

<FormGroup>
   <Label for='description'>Parcel Description</Label>
                <Input
                  type='description'
                  name='description' required
                  id='description'
                  placeholder=''
                  className='mb-3'
                  onChange={this.onChange}
                />



</FormGroup>

<FormGroup>
<FormGroup>

<Label for='qty'>Quantity </Label>
<Input
type='number'
name='qty'
id='qty' required
placeholder=''
className='mb-3'
onChange={this.onChange}
/>
</FormGroup>

                  <Label for='weight'>Weight </Label>
                <Input
                  type='number'
                  name='weight'
                  id='weight' required
                  placeholder=''
                  className='mb-3'
                  onChange={this.onChange}
                />
</FormGroup>
{
  this.props.parcels.isAdding?(
    <div className="d-flex text-primary justify-content-center">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  ):null
}
 <Button color='dark' disabled={this.props.parcels.isAdding} style={{ marginTop: '2rem' }} block>
 {
  this.props.parcels.isAdding? "Please wait":"Submit"}
                </Button>


               </div>


            </Row>




            </Form>
            </CardBody>
            </Card>



      </div>
    )
  }
}

const mapStateToProps=state=>({
  errors:state.errors,
  parcels:state.parcels
})

export default connect(mapStateToProps,{createParcel})(NewOrder)