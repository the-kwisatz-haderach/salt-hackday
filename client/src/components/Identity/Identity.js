import React, { useState } from 'react';
import './Identity.css';

const Identity = (props) => {
  const [identityState, setIdentityState] = useState(null);
  
    const getIdentity = () => {
      fetch('/api/identity')
        .then(stream => stream.json())
        .then(data => {
          setIdentityState(data);
        })
        .catch(error => {
          console.error(error);
        });
    }

    const saveIdentity = id => {
      const reqBody = JSON.stringify({ userId: id, identity: identityState });

      fetch('/api/identity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: reqBody
      })
      .catch(err => console.error(err));
    }

    return (
      <div className="identity">
        <p className="identity__intro">Your new identity is just a click away!</p>
        <button className="button" onClick={getIdentity}>Generate identity</button>
        {identityState ? 
        <div className="identity-container">
          <ul className="identity-card">
            <li className="identity-card__row"><span className="--bold">Name:</span> {identityState.firstName} {identityState.lastName}</li>
            <li className="identity-card__row"><span className="--bold">Birthdate:</span> {identityState.birthdate}</li>
            <li className="identity-card__row"><span className="--bold">From:</span> {identityState.birthplace}</li>
            <li className="identity-card__row"><span className="--bold">Current locale:</span> {identityState.city}</li>
            <li className="identity-card__row"><span className="--bold">Occupation:</span> {identityState.jobTitle}</li>
            <li className="identity-card__row"><span className="--bold">Spouse:</span> {identityState.spouseName}</li>
            <li className="identity-card__row"><span className="--bold">Number of kids:</span> {identityState.amountKids}</li>
            <div className="identity-card__row">
              <li><span className="--bold">Pet:</span> {identityState.petName}</li>
              <li><img className="identity-card__image" src={identityState.petPhoto} alt="pet-name"></img></li>
            </div>
          </ul>
          <button className="button--green" onClick={() => saveIdentity(props.userValues.id)}>
            <object type="image/svg+xml" data="/card.svg" className="button__icon--white" alt="identity-icon">
              SVG not supported.
            </object>
            Save identity
          </button>
        </div>
        : <></>
        }
      </div>
    );
}

export default Identity;