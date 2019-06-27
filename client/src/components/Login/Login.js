import React from 'react';
import Facebook from '../Facebook';
import Header from '../Header/Header';
import { UserContext } from '../App';
import './Login.css';

function Login() {
  
  return (
    <>
    <Header />
    <div className="login-container">
      <UserContext.Consumer>
          {({authorized}) =>
          authorized ? 
          <h2 className="login__heading"><span className="emoji">👍</span><br/>You are authorized!</h2>
          :
          <div className="login">
            <h1 className="login__heading">Please login to save your identities.</h1>
            <div className="login__button">
              <Facebook />
            </div>
          </div>
          }
      </UserContext.Consumer>
    </div>
    </> 
  );
}

export default Login;
