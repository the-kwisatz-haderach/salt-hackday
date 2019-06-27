import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [identityState, setIdentityState] = useState(null);

  const getIdentity = () => {
    fetch('/api/identity')
      .then(stream => stream.json())
      .then(data => {
        console.log(data);
        setIdentityState(data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <h1>Welcome</h1>
      <p>Your new identity is just a click away!</p>
      <button onClick={getIdentity}>Generate identity</button>
      {identityState ? 
      <ul>
        <li>Name: {identityState.firstName} {identityState.lastName}</li>
        <li>Birthdate: {identityState.birthdate}</li>
        <li>From: {identityState.birthplace}</li>
        <li>Current locale: {identityState.city}</li>
        <li>Spouse: {identityState.spouseName}</li>
        <li>Pet: {identityState.petName}</li>
        <li><img src={identityState.petPhoto} alt="pet-name"></img></li>
      </ul>
      : <></>
      }
    </div>
  );
}

export default Home;
