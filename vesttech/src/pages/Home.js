import React from 'react';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import Details from './components/Details.js';
import About from './components/About.js';
import Faq from './components/Faq.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <>
      <div className="landingpage">
        <Navbar/>
        <Header/>
        <Details/>
        <About/>
        <Faq/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
