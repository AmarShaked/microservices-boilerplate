import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import Button from '../Button';
import './Navigation.css';

const Navigation = ({ isAuthenticated, onLogout, user }) => {

  if (isAuthenticated) {
    return (
      <ul className="navigation">
        <Link to="/profile" className="nav-link"><li>{user.email}</li></Link>
        <Button icon="fa fa-sign-out" onClick={onLogout}>Logout</Button>
      </ul>
    )
  }

  return (
    <ul className="navigation">
      <Link to="/signup" className="nav-link"><li>Signup</li></Link>
      <Link to="/login" className="nav-link"><li>Login</li></Link>
    </ul>
  )
}

export default Navigation;