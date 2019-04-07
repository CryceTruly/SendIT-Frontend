import React, { Component } from 'react'
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Form,
    FormGroup,
    Label,
    Input,
    Alert,
    Row,
    Col
  } from 'reactstrap';
export default class NewOrder extends Component {
    state = {
        fullname: '',
        email: '',
        password: '',
        phone_number:'',
        username:'',
        msg: null
      };

  render() {
    return (
      <div>

         <Card>
        <CardBody>
          <CardTitle></CardTitle>

          <CardTitle><strong>Add a new Parcel Request.</strong></CardTitle>


            <Form onSubmit={this.onSubmit}>


{this.state.msg?<Alert color="danger">{this.state.msg}</Alert>:null}

            <Row>
              <div className="col-md-6">

              <FormGroup>
                <Label for='fullname'>Pickup Location</Label>
                <Input
                  type='text'
                  name='fullname'
                  id='fullname'
                  placeholder='Full Name' required
                  className='mb-3'
                  onChange={this.onChange}
                />
                </FormGroup>


<FormGroup>
                <Label for='email'>Destination address</Label>
                <Input
                  type='email'
                  name='email'
                  id='email' required
                  placeholder='Email'
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

              </div>
               <div className="col-md-6">
<FormGroup>
  <Label for='username'>Recipient Fullname</Label>
                <Input
                  type='text'
                  name='username'
                  id='username' required
                  placeholder=''
                  className='mb-3'
                  onChange={this.onChange}
                />
</FormGroup>
<FormGroup>
   <Label for='password'>Parcel Description</Label>
                <Input
                  type='password'
                  name='password' required
                  id='password'
                  placeholder=''
                  className='mb-3'
                  onChange={this.onChange}
                />



</FormGroup>

<FormGroup>

                  <Label for='password_comfirm'>Weight </Label>
                <Input
                  type='password_comfirm'
                  name='password'
                  id='password_comfirm' required
                  placeholder=''
                  className='mb-3'
                  onChange={this.onChange}
                />
</FormGroup>
 <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Submit
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
