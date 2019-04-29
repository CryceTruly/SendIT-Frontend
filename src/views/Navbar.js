import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { isAuthenticated, user,onLogoutClick } = props;

  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      </form>

      <li className="nav-item">
        <Link className="nav-link" to="/">  <strong>{user ? `Welcome ${user.username}` : ""}</strong> </Link>
      </li>
      <li className="nav-item">
        {user && user.is_admin ? (<Link className="nav-link" to="/new">All Activity</Link>) : (<Link className="nav-link" to="/new">Create Order</Link>
        )}
      </li>
      <li className="nav-item" onClick={onLogoutClick}>
        <Link className="nav-link" to="">Logout</Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register"> Register</Link>
      </li>
    </ul>
  );
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand"><i class="fa fa-paper-plane" aria-hidden="true"></i>SendIT</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
