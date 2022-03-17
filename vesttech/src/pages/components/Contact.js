import React from 'react';
import '../styles/Contact.css';
import { Telephone, Envelope } from 'react-bootstrap-icons';

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact__head">
          <h1>Contact</h1>
          <h2>Contact Us</h2>
        </div>
        <div className="contact__body">
          <div className="contact__phone">
            <Telephone color="royalblue" size={30} />
            <h1>Call Us</h1>
            <h2>+91 9051538825</h2>
          </div>
          <div className="contact__mail">
            <Envelope color="royalblue" size={30} />
            <h1>Email Us</h1>
            <h2><a href="mailto:jyotirmoyroy649@gmail.com">jyotirmoyroy649@gmail.com</a></h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
