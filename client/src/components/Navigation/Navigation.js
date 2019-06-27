import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { UserContext } from '../App';

function Navigation() {
  
  return (
    <nav className="main-nav">
      <UserContext.Consumer>
        {({authorized, signoutUser}) => authorized ?
        <>
          <Link className="main-nav__link" to="/">Home</Link>
          <Link className="main-nav__link" to="/profile">Profile</Link>
          <button className="main-nav__link button" onClick={signoutUser}>Sign out</button>
        </> :
        <>
          <Link className="main-nav__link" to="/">Home</Link>
          <Link className="main-nav__link" to="/login">Login</Link>
        </>
        }
      </UserContext.Consumer>
    </nav>
  );
}

export default Navigation;
