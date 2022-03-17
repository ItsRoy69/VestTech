import React from 'react';
import '../styles/Footer.css';
import { Instagram, Youtube, Facebook, Twitter, Linkedin } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer__head">
          <h1>VestTech</h1>
        </div>
        <div className="footer__body">
          <Youtube className="logo" size={30} />
          <Instagram className="logo" size={30} />
          <Facebook className="logo" size={30} />
          <Twitter className="logo" size={30} />
          <Linkedin className="logo" size={30} />
        </div>
        <div className="footer__bottom">
          <h1>© Copyright VestTech. All Rights Reserved</h1>
          <h2>Designed & Developed by Jyotirmoy Roy</h2>
        </div>
      </div>
    </>
  );
};


export default Footer;
