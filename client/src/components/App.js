import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Login from './Login/Login';
import Navigation from './Navigation/Navigation';
  
export const UserContext = createContext({
  authorized: false,
  authorizeUser: () => { UserContext.authorized = true },
  name: null,
  picture: '',
  id: null
});

function App() {
  const [ authorizedState, setAuthorizedState ] = useState(false);
  const [ usernameState, setUsernameState ] = useState('');
  const [ userPictureState, setUserPictureState ] = useState('');
  const [ userIdState, setUserIdState ] = useState(null);

  const userValues = {
    authorized: authorizedState,
    authorizeUser: (id, name, imagePath) => {
      localStorage.setItem('authorized', 'true');
      localStorage.setItem('img', imagePath);
      localStorage.setItem('name', name);
      localStorage.setItem('id', id);
      setAuthorizedState(true);
      setUserPictureState(imagePath);
      setUsernameState(name);
      setUserIdState(id);
    },
    signoutUser: () => {
      localStorage.clear();
      setAuthorizedState(false);
      setUserPictureState('');
      setUsernameState('');
      setUserIdState(null);
    },
    name: usernameState,
    picture: userPictureState,
    id: userIdState,
  }

  useEffect(() => {
    const authorized = JSON.parse(localStorage.getItem('authorized'));
    if (authorized) {
      const name = localStorage.getItem('name');
      const image = localStorage.getItem('img');
      const id = localStorage.getItem('id');
      userValues.authorizeUser(id, name, image);
    }
  }, [userValues]);

  return (
    <BrowserRouter>
      <UserContext.Provider value={userValues}>
        <div className="App">
          <Navigation />
          <Route 
            exact path="/" 
            render={(routeProps) => (
              <Home {...routeProps} {...userValues}/>
            )}
          />
          <Route path="/login" component={Login}></Route>
          <Route 
            path="/profile" 
            render={(routeProps) => (
              <Profile {...routeProps} {...userValues}/>
            )}
          />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;


// {userValues.authorized ? 
//   <Route 
//     path="/profile" 
//     render={(routeProps) => (
//       <Profile {...routeProps} {...userValues}/>
//     )}
//   />
//   : <Redirect to="login"></Redirect>
//   }