import React from 'react';

import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Banner from '../components/Banner';
import '../styles/Home.css'
import About from '../components/About'


const Home = () => {
  return (
    <>
        <Navbar />
        <Banner/>
        <About />
        <Footer />
    </>
  )
}

export default Home
