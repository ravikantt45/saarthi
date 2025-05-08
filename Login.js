import React from "react";

function Login({ switchPage }) {
  return (
    <div className="auth-container">
      <h2>Student Login</h2>
      <p>Welcome back! Log in to access your dashboard.</p>
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <button>Log In</button>
      <p>Don’t have an account? <span onClick={switchPage}>Sign up</span></p>
    </div>
  );
}

export default Login;