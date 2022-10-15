import img1 from "../images/dignity-1.png";
import img2 from "../images/dignity-2.png";
import img3 from "../images/dignity-3.png";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <div className="main-container">
        <h2 className="title">what we do?</h2>
        <p className="subtitle">
          We help you to gain knowledge and open a portal for users to invest in
          crypto and shares
        </p>
        <center>
          <div className="type-card">
            <div className="contents">
              <div>
                <img src={img1} alt="" srcset="" />
                <h3 className="service-title">Crypto Trading Interace</h3>
                <p>
                  We created the most simple and comfortable crypto interface
                  that does not distract form the main thing - from trading.
                </p>
              </div>
              <div>
                <img src={img2} alt="" srcset="" />
                <h3 className="service-title">Share Trading Indicators</h3>
                <p>
                  {" "}
                  We have gathered the most useful share trading indicators. Use
                  them to boost your account balance.
                </p>
              </div>
              <div>
                <img src={img3} alt="" srcset="" />
                <h3 className="service-title">Knowledge</h3>
                <p>
                  our platform helps to gain knowledge about stocks and crypto
                  trading by professional mentors.
                </p>
              </div>
            </div>
            <center>
              <button className="acc-btn">
                <a href="#" className="acc-link">
                  Create an acocunt
                </a>
              </button>
            </center>
          </div>
        </center>
      </div>
    </>
  );
};

export default About;
