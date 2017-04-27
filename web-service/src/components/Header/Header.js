import React from 'react';
import './Header.css';
import { NavLink as Link } from 'react-router-dom';
import Navigation from '../Navigation';

const Header = ({ isAuthenticated, onLogout, user }) => {

  return (
    <header className="Header">
      <div className="brand">
        <Link to="/">
          ProjectName
        </Link>
      </div>
      <Navigation 
        isAuthenticated={isAuthenticated}
        onLogout={onLogout}
        user={user}
       />
    </header>
  )
}

export default Header;