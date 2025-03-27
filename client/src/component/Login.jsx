import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p className="signup-text">
             Are you a new user? <a href="/signup">Sign up</a>
       </p>
       <p className="signup-text">
               <a href="/home">Go to Home</a>
        </p>

      </div>
    </div>
  );
};

export default Login;
