import React, { useState } from 'react';
import './Identity.css';

const Identity = () => {
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
        <button onClick={getIdentity}>Generate identity</button>
        {identityState ? 
        <ul>
          <li>Name: {identityState.firstName} {identityState.lastName}</li>
          <li>Birthdate: {identityState.birthdate}</li>
          <li>From: {identityState.birthplace}</li>
          <li>Current locale: {identityState.city}</li>
          <li>Occupation: {identityState.jobTitle}</li>
          <li>Spouse: {identityState.spouseName}</li>
          <li>Number of kids: {identityState.amountKids}</li>
          <li>Pet: {identityState.petName}</li>
          <li><img src={identityState.petPhoto} alt="pet-name"></img></li>
        </ul>
        : <></>
        }
      </div>
    );
}

export default Identity;