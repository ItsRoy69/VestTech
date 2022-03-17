import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Header.css';
import headerimg from "../../images/platform.png";

const Header = () => {
  return (
    <div className="headers">
      <div className="header__text">
        <h1>Header</h1>
      </div>
      <div className="headers">
      <div className="header__img">
        <img src={headerimg} alt="img" />
      </div>
      </div>
    </div>
  );
};

export default Header;
