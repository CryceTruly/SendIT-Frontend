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
import {logout} from '../../actions/authActions';
export class Navigationbar extends Component {


  static propTypes = {
    auth: PropTypes.object.isRequired  };

    onLogoutClick=()=>{
      this.props.logout(this.props)

    }

  render() {
    const { isAuthenticated,user } = this.props.auth;
     const authLinks = (
      <Fragment>
        <NavItem>
          <span className='navbar-text mr-3'>
            <strong>{user ? `Welcome ${user.username}` : ''}</strong>
          </span>
        </NavItem>
        <NavItem className="mr-1 mt-2">
        <Link to="/new">Create Order</Link>

        </NavItem>
        <NavItem className="btn btn-link" onClick={this.onLogoutClick.bind(this)}>
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
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='/'><span className="fa fa-send"></span>SendIT</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse navbar>
              <Nav className='ml-auto' navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {logout},
)(Navigationbar);