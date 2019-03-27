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
  Col
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearErrors } from '../actions/errorActions';
import {register} from '../actions/authActions';
import {Link} from 'react-router-dom';
class Login extends Component {
  state = {
    name: '',
    email: '',
    password: '',
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
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If authenticated, close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }


  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { username,fullname,phone,password_comfirm, email, password } = this.state;

    // Create user object
    const newUser = {
      username,
      email,
      password,
      password_comfirm,
      phone,
      fullname
    };

    // Attempt to register
    this.props.register(newUser);
  };

  render() {
    return (
      <div>
        <Row>
<div className="col col-md-3"></div>
< div className = "col col-md-6" >


         <Card>
        <CardBody>
          <CardTitle>Login</CardTitle>
            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}

            <Form onSubmit={this.onSubmit}>



               <FormGroup>
                <Label for='email'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='mb-3'
                  onChange={this.onChange}
                /></FormGroup >



<FormGroup>
   <Label for='password'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder=''
                  className='mb-3'
                  onChange={this.onChange}
                />



</FormGroup>


<p className="text-right">Forgot Password?</p>
 <Button color='dark' style={{ marginTop: '1rem' }} block>
                  Login
                </Button>
                <h5 className="text-center mb-2 mt-2">New to SendIT? <span> <Link to="/register">Create an account</Link></span></h5>








            </Form>
            </CardBody>
            </Card>

</div>
< div className = "col col-md-3" > </div>

        </Row>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps,{ register, clearErrors })(Login);