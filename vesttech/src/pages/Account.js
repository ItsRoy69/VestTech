import React from 'react';
import './styles/Account.css';

import Navbar from './components/Navbar.js';
import Faq from './components/Faq.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';


const Account = () => {
  return (
    <>
        <Navbar/>
        <Faq/>
        <Contact/>
        <Footer/>
    </>
  );
};


export default Account;
