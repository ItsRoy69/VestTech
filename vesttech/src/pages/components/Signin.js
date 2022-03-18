import React from "react";
const SignInForm = () => {
  return (
    <div>
      <div>
        <input name="email" placeholder="Email" />
        <input name="password" placeholder="Password" />
      </div>
      <p>Forgot your password?</p>
    </div>
  );
};

export default SignInForm;
