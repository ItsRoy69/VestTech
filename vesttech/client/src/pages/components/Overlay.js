import React from "react";
const Overlay = props => {
  return (
    <div>
      <h1 className="main-heading overlay-heading">{props.greeting}</h1>
      <div>{props.msg}</div>
      <div className="signBtn btn" onClick={props.click}>
        {props.signBtn}
      </div>
    </div>
  );
};

export default Overlay;
