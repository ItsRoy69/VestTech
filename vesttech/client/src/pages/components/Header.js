import React from 'react';
import '../styles/Header.css';
import headerimg from "../../images/platform.png";

const Header = () => {
  return (
    <>
      <div className="heading">
        <div className="headers">
          <div className="header__text">
            <h1>VestTech</h1>
            <h2>Innovative platform for smart investments 🚀</h2>
            <p>Learn and Earn</p>
            <br/><br/>

            <a href="#detail" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
              <span>How ?</span>
            </a>
          </div>

          <div className="headers">
          <div className="header__img">
            <img src={headerimg} alt="img" />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
