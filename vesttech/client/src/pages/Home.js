import React from 'react';

import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

import '../styles/Home.css';

const Home = () => {
  return (
    <>
        <Navbar />
        <div>
            Banner
            About
            Faq
        </div>
        <Footer />
    </>
  )
}

export default Home
