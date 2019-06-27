import React from 'react';
import Identity from '../Identity/Identity';
import Header from '../Header/Header';
import './Home.css';
import { UserContext } from '../App';

function Home() {
  
  return (
    <div className="home">
      <Header />
      <UserContext.Consumer>
        {contextValues => <Identity userValues={contextValues}/>}
      </UserContext.Consumer>
    </div>
  );
}

export default Home;
