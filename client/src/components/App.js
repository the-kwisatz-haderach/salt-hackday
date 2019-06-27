import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Home/Home';
  
export const UserContext = createContext({
  authorized: false,
  authorizeUser: () => { UserContext.authorized = true },
  name: null,
  picture: '',
});

function App() {
  const [userState, setUserState] = useState(null);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
