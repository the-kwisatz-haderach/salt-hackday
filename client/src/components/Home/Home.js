import React from 'react';
import Identity from '../Identity/Identity';
import Login from '../Login/Login';
import './Home.css';
import { UserContext } from '../App';

function Home() {
  
  return (
    <div>
      <h1>Welcome</h1>
      <p>Your new identity is just a click away!</p>
      <UserContext.Consumer>
        {contextValues => <Identity userValues={contextValues}/>}
      </UserContext.Consumer>
      <Login />
    </div>
  );
}

export default Home;
