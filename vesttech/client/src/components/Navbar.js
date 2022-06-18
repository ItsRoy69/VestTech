import React from 'react';
import "../styles/Navbar.css";
import Logo from '../images/bitcoin-2.png';
import { Navbar as BsNavbar, Nav, Container, NavDropdown } from 'react-bootstrap';


const Navbar = () => {
  return (
      <div className='navbar'>
        <BsNavbar className="" expand='lg'>
          <div className='logo'>
              <img
                alt="vesttechLogo"
                src={Logo}
                className="vesttech-logo"
              />{' '}
              <h2>VestTech</h2>
          </div>
          <BsNavbar.Toggle className='nav-toggle navbar-dark' aria-controls='basic-navbar-nav' />
          <BsNavbar.Collapse className='nav-collapse justify-content-end' id='basic-navbar-nav'>
          <ul className='nav-list'>
              <li><Nav.Link href="#" eventKey="2" className='nav-item'>Home</Nav.Link></li>
              <li><Nav.Link href="#" className='nav-item'>About Us</Nav.Link></li> 
              <li><Nav.Link href="#" className='nav-item'>Invest</Nav.Link></li>
              <li><Nav.Link href="#" className='nav-item'>FaQ</Nav.Link></li>
              <li><Nav.Link href="#" className='nav-item'>Contact</Nav.Link></li>       
            </ul>
          </BsNavbar.Collapse>
          
            
        </BsNavbar>
      </div>
  )
}

export default Navbar
