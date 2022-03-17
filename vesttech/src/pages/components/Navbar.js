import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import navimg from "../../images/bitcoin.png";

const Navbar = () => {
    return (
      <>
        <navbar className="main-navbar fixed-top">
          <div className="brand-logo-name">
            <Link to={"/"} className="brand-logo">
              <img src={navimg} alt="img" />
            </Link>
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>About</Link>
              </li>
              <li>
                <Link to={"/"}>Contact</Link>
              </li>
              <li>
                <Link to={"/"}>Get Started</Link>
              </li>
            </ul>
          </nav>
        </navbar>
      </>
    );
  }

export default Navbar;
