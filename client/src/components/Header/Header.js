import React from 'react';
import './Header.css';
import { UserContext } from '../App';

function Header() {
  
  return (
    <UserContext.Consumer>
      {({authorized, name}) =>
      <div className="header">
        {!authorized ? 
        <h1 className="header__title">Welcome to Secret Identity!</h1> :
        <h1 className="header__title">
          Welcome to Secret Identity
          <span className="header__title--colored">
          <br/>{`${name}`}
          </span>
        </h1>
        }
      </div>
      }
    </UserContext.Consumer>
  );
}

export default Header;
