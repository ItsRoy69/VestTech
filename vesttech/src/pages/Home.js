import React from 'react';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import Details from './components/Details.js';
import About from './components/About.js';
import Faq from './components/Faq.js';

const App = () => {
  return (
    <>
      <div className="landingpage">
        <Navbar/>
        <Header/>
        <Details/>
        <About/>
        <Faq/>
      </div>
    </>
  );
}

export default App;
