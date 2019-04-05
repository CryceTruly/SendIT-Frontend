import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
class Navigationbar extends Component {


  static propTypes = {
    auth: PropTypes.object.isRequired
  };
getStyle=()=>{
  return {
     background: '#7C3085',
     color: '#ffffff',


  }
}

myStyle=()=>{
return{
  color:"#fff",
  marginRight:20
}
}



  render() {
    const { isAuthenticated,user, username } = this.props.auth;
    console.log(user);


    const authLinks = (
      <Fragment>
        <NavItem>
          <span className='navbar-text mr-3'>
            <strong>{username ? `Welcome ${user}` : ''}</strong>
          </span>
        </NavItem>
        <NavItem className="mr-5">
        <Link to="/new">Create Order</Link>

        </NavItem>
        <NavItem>
          Logout
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <Link  to={"/login"}>Login </Link>
        </NavItem>
        < NavItem className = "text-white" >
          <span className="mr-4"></span>
          <Link  to={"/register"}> Register</Link>
        </NavItem>
      </Fragment>
    );

    return (
      <div style={this.getStyle()}>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='/'><span className="fa fa-send"></span>SendIT</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse navbar>
              <Nav className='ml-auto' navbar style={this.myStyle()}>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Navigationbar);