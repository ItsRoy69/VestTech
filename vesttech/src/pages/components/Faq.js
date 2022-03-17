import React from 'react';
import '../styles/Faq.css';

const Faq = () => {
  return (
    <>
      <div className="faq" id="faq">
        <div className="faq__head">
          <h1>F.A.Q</h1>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq__boxes">
          <div className="faq__box">
            <h1>How can we gain knowledge about crypto and shares ?</h1>
            <h2>It's easy just click on the link of the tutorial we have mentioned in segement. If you are searching a tutorial and click on the video you want when you scroll down you will see other videos too.</h2>

            <h1>Who will be the mentors ?</h1>
            <h2>Mentors will be hired by VestTech who have proper knowledge about share and crypto market.</h2>

            <h1>Will I have to pay for the mentors ?</h1>
            <h2>No, for tutorial videos you won't have to pay a penny.</h2>

          </div>
          <div className="faq__box">
            <h1>Can II share both in crypto as well as stock market ?</h1>
            <h2>You can invest in anywhere you like.</h2>

            <h1>Do I have to open the acount first ?</h1>
            <h2>Yes then only you can get registered.</h2>

            <h1>Money required to open a demo account ?</h1>
            <h2>It depends.</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
