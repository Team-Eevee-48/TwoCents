import React from "react";
import { Link } from "react-router-dom";

const Login = () => (
  <div className="login">
    <h2>Login</h2>
    <label htmlFor="username"> Username
    <input type="text" name="username"></input>
    </label>
    <label htmlFor="password"> Password
    <input type="password" name="password"></input>
    </label>
    <button className="submitBtn">Log In</button>
    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
  </div>
);

export default Login;