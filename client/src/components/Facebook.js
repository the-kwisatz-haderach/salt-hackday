import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { UserContext } from './App';

const Facebook = () => {

  const componentClicked = e => {
  }

  return (
    <UserContext.Consumer>
      {({ authorizeUser }) =>
        <div>
            <FacebookLogin
              appId="310248646596068"
              autoLoad={false}
              fields="name,email,picture"
              onClick={componentClicked}
              callback={response => {
                if (response.signedRequest) {
                  authorizeUser(response.userID, response.name, response.picture.data.url);
                }
              }}
            />
        </div>
      }
    </UserContext.Consumer>
  );
}

export default Facebook;