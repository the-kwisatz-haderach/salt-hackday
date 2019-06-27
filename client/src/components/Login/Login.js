import React from 'react';
import Facebook from '../Facebook';
import { UserContext } from '../App';
import './Login.css';

function Login() {
  
  return (
    <UserContext.Consumer>
      {({authorized}) =>
      authorized ? 
      <h2>You are authorized!</h2>
      :
      <div>
        <Facebook />
      </div>
      }
    </UserContext.Consumer>
  );
}

export default Login;
