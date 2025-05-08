import React from "react";

function Signup({ switchPage }) {
  return (
    <div className="auth-container">
      <h2>Create Student Account</h2>
      <p>Join Saarthi to find your dream job.</p>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button>Create Account</button>
      <p>Already have an account? <span onClick={switchPage}>Log in</span></p>
    </div>
  );
}

export default Signup;