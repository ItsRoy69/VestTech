import React from 'react';
import '../styles/Details.css';
import pic1 from "../../images/dignity-1.png";
import pic2 from "../../images/dignity-2.png";
import pic3 from "../../images/dignity-3.png";

const Details = () => {
  return (
    <>
      <div className="details" id="detail">
        <div className="details__head">
          <h1>WHAT WE DO ?</h1>
          <p>We help you to gain knowledge and open a portal for users to invest in crypto and shares</p>
        </div>
        <div className="details__boxes">
          <div className="details__boxed">
            <div className="details__box">
              <div className="details__pic">
                <img src={pic1} alt="crypto" />
              </div>
              <div className="details__about">
                <h1>Crypto trading interface</h1>
                <p>We created the most simple and comfortable crypto interface that does not distract from the main thing - from trading.</p>
              </div>
            </div>
            <div className="details__box">
              <div className="details__pic">
                <img src={pic2} alt="crypto" />
              </div>
              <div className="details__about">
                <h1>Shares trading indicators</h1>
                <p>We have gathered the most useful share trading indicators. Use them to boost your account balance.</p>
              </div>
            </div>
            <div className="details__box">
              <div className="details__pic">
                <img src={pic3} alt="crypto" />
              </div>
              <div className="details__about">
                <h1>Knowledge</h1>
                <p>Our platform helps to gain knowledge about stocks and crypto trading by professional mentors.</p>
              </div>
            </div>
            <div className="details__button">
              <a href="/account">
                <button className="about btn pointer" style={{"font-size": "15px"}}>Create an Account</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
