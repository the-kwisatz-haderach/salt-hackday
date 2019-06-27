import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import Home from './Home/Home';
  
export const UserContext = createContext({
  authorized: false,
  authorizeUser: () => { UserContext.authorized = true },
  name: null,
  picture: '',
});

function App() {
  const [userIdState, setUserIdState] = useState(null);

  const userStatus = () => {
    fetch('/api/user')
    .then(id => {
      setUserIdState(id);
    })
    .catch(err => {
      console.error(err);
    })
  }

  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
