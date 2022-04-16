import React from 'react';
import '../styles/About.css';
import about from "../../images/pp.jpg";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about__head">
          <h1>WHO BUILT THIS ?</h1>
        </div>
        <div className="about__pic">
          <img src={about} alt="about"/>
        </div>
        <div className="about__para">
          <h2>Jyotirmoy Roy</h2>
          <p>An enthusiastic learner who thinks that quality is the first and foremost attribute which I need in any working professional. I am striving to achieve my milestone. I recently have gone into Web Development who is willing to collaborate on open source projects and internships.</p>
        </div>
      </div>
    </>
  );
};

export default About;
