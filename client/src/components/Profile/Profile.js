import React, { useEffect, useState } from 'react';
import './Profile.css';

function Profile(props) {
  const [ profileIdentities, setProfileIdentities ] = useState([]);

  useEffect(() => {
    fetch(`/api/identity/${props.id}`)
      .then(data => data.json())
      .then(identities => setProfileIdentities(identities))
      .catch(err => console.error(err));
  }, [props.id])

  return (
    <div>
      <img src={props.picture} alt="profile-pic"></img>
      <h1>Welcome {props.name}</h1>
      <div>
        {
          profileIdentities.map(identity => {
            return (
              <div key={identity.id}>
                <ul>
                  <li>Name: {identity.firstName} {identity.lastName}</li>
                  <li>Birthdate: {identity.birthdate}</li>
                  <li>From: {identity.birthplace}</li>
                  <li>Current locale: {identity.city}</li>
                  <li>Occupation: {identity.jobTitle}</li>
                  <li>Spouse: {identity.spouseName}</li>
                  <li>Number of kids: {identity.amountKids}</li>
                  <li>Pet: {identity.petName}</li>
                  <li><img src={identity.petPhoto} alt="pet-name"></img></li>
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Profile;
