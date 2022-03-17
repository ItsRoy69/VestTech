import React from 'react';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import Details from './components/Details.js';

const App = () => {
  return (
    <>
      <div className="landingpage">
        <Navbar/>
        <Header/>
        <Details/>
      </div>
    </>
  );
}

export default App;
