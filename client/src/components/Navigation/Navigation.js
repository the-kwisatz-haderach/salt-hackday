import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { UserContext } from '../App';

function Navigation() {
  
  return (
    <nav>
      <UserContext.Consumer>
        {({authorized, signoutUser}) => authorized ?
        <>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">My identities</Link></li>
            <li><button onClick={signoutUser}>Sign out</button></li>
          </ul>
        </> :
        <>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </>
        }
      </UserContext.Consumer>
    </nav>
  );
}

export default Navigation;
