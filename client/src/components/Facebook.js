import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { UserContext } from './App';

const Facebook = () => {

  const componentClicked = e => {
  }

  return (
    <UserContext.Consumer>
      {({authorized, authorizeUser}) =>
      <div>
        {
          authorized ? 
          <h2>You are authorized!</h2> :
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
        }
      </div>
      }
    </UserContext.Consumer>
  );
}

export default Facebook;

// export default class Facebook extends React.Component {
//   state = {
//     isLoggedIn: false,
//     userId: '',
//     name: '',
//     email: '',
//     picture: ''
//   }

//   responseFacebook = response => {
//     console.log(response);
//     this.isLoggedIn = response.status !== 'unknown' ? true : false;
//   }

//   componentClicked = () => console.log('Clicked!');

//   render() {
//     let userValues = this.context;


//     let fbContent;

//     if (this.state.isLoggedIn) {
//       fbContent = null;
//     } else {
//       fbContent = (
//       <FacebookLogin
//         appId="2391298584298536"
//         autoLoad={true}
//         fields="name,email,picture"
//         onClick={this.componentClicked}
//         callback={this.responseFacebook} />
//       )
//     }

//     return (
//       <div>
//         {fbContent}
//       </div>
//     );
//   }
// }