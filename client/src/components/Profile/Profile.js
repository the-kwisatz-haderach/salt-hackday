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
      <div className="profile">
        <img className="profile__pic" src={props.picture} alt="profile-pic"></img>
        <h2 className="profile__title">{props.name}'s profile</h2>
      </div>
      <div className="identity-container">
      <h3 className="identity-card__title">Your identities:</h3>
        {
          profileIdentities.map(identity => {
            return (
              <div className="identity-block" key={identity.id}>
                <ul>
                  <li className="identity-card__row"><span className="--bold --big">{identity.firstName} {identity.lastName}</span></li>
                  <li className="identity-card__row"><span className="--bold">Birthdate:</span> {identity.birthdate}</li>
                  <li className="identity-card__row"><span className="--bold">From:</span> {identity.birthplace}</li>
                  <li className="identity-card__row"><span className="--bold">Current locale:</span> {identity.city}</li>
                  <li className="identity-card__row"><span className="--bold">Occupation:</span> {identity.jobTitle}</li>
                  <li className="identity-card__row"><span className="--bold">Spouse:</span> {identity.spouseName}</li>
                  <li className="identity-card__row"><span className="--bold">Number of kids:</span> {identity.amountKids}</li>
                  <li className="identity-card__row"><span className="--bold">Pet:</span> {identity.petName}</li>
                  <li className="identity-card__row"><img className="identity-card__image" src={identity.petPhoto} alt="pet-name"></img></li>
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
