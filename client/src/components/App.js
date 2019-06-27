import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import Home from './Home/Home';
  
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
    <div className="App">
      <UserContext.Provider value={userValues}>
        <Home />
      </UserContext.Provider>
    </div>
  );
}

export default App;
