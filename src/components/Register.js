import React, { Component } from 'react';
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
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearErrors } from '../actions/errorActions';
import {register} from '../actions/authActions'
class RegisterComponent extends Component {
  state = {
    fullname: '',
    email: '',
    password: '',
    phone_number:'',
    username:'',
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg });
      } else {
        this.setState({ msg: null });
      }
    }

  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { username,fullname,phone_number, email, password,password_comfirm } = this.state;
    // Create user object
    const newUser = {
      username,
      email,
      password,
      phone_number,
      fullname
    };

    // Attempt to register
    this.props.register(newUser,this.props);
  };

  render() {
    return (
      <div>
         <Card>
        <CardBody>
          <CardTitle></CardTitle>

          <CardTitle><strong>Register an Account.</strong></CardTitle>


            <Form onSubmit={this.onSubmit}>


{this.state.msg?<Alert color="danger">{this.state.msg}</Alert>:null}

            <Row>
              <div className="col-md-6">

              <FormGroup>
                <Label for='fullname'>Fullname</Label>
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
                <Label for='email'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  id='email' required
                  placeholder='Email'
                  className='mb-3'
                  onChange={this.onChange}/>
                 </FormGroup>
                <FormGroup>
<Label for='phone_number'>Phone Number</Label>
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
  <Label for='username'>Username</Label>
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
   <Label for='password'>Password</Label>
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

                  <Label for='password_comfirm'>Confirm Password </Label>
                <Input
                  type='password'
                  name='password'
                  id='password_comfirm' required
                  placeholder=''
                  className='mb-3'
                  onChange={this.onChange}
                />
                {
  this.props.error.processing?(
    <div className="d-flex text-primary justify-content-center">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  ):null
}

</FormGroup>
 <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Register
                </Button>


               </div>


            </Row>




            </Form>
            </CardBody>
            </Card>

      </div>
    );
  }

}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.errors
});

export default connect(mapStateToProps,{ register, clearErrors })(RegisterComponent);
