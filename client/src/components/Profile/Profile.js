import React, { useEffect } from 'react';
import './Profile.css';

function Profile(props) {

  // useEffect(() => {
  //   fetch()
  // }, [])

  return (
    <div>
      <img src={props.picture} alt="profile-pic"></img>
      <h1>Welcome {props.name}</h1>
      <ul>
        <li>Test</li>
      </ul>
    </div>
  );
}

export default Profile;
