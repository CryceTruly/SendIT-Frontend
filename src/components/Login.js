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
import {login} from '../actions/authActions';
import {Link,Redirect} from 'react-router-dom';
class Login extends Component {
  state = {
    email: '',
    password: '',
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'LOGIN_FAIL') {
        this.setState({ msg: error.msg });
      } else {
        this.setState({ msg: null });
      }
    }

      if (isAuthenticated) {

      }

  }


  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    // Create user data
    const newUser = {
      email,
      password
    };

    // Attempt to login
    this.props.login(newUser,this.props);
  };

  render() {

    return (
      <div>
        <Row>
<div className="col col-md-3 col-sm-0"></div>
< div className = "col col-md-6 col-sm-12" >


         <Card>
        <CardBody>
          <CardTitle><strong>Login to SendIT.</strong></CardTitle>
            <Form onSubmit={this.onSubmit}>

  {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}

               <FormGroup>
                <Label for='email'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='mb-3'
                  onChange={this.onChange} required
                /></FormGroup >



<FormGroup>
   <Label for='password'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  id='password' required
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
< div className = "col col-md-3 col-sm-0" > </div>

        </Row>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.errors,
  auth:state.auth
});

export default connect(mapStateToProps,{ login, clearErrors })(Login);
