import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => (
  <div className="login">
    <h2>Create an account</h2>
    <label htmlFor="firstName"> First Name
    <input type="text" name="firstName"></input>
    </label>
    <label htmlFor="lastName"> Last Name
    <input type="text" name="lastName"></input>
    </label>
    <label htmlFor="email"> Email Address
    <input type="text" name="email"></input>
    </label>
    <label htmlFor="username"> Username
    <input type="text" name="username"></input>
    </label>
    <label htmlFor="password"> Password
    <input type="password" name="password"></input>
    </label>
    <button className="submitBtn">Create Account</button>
    <p>Already have an account? <Link to="/login">Log In</Link></p>
  </div>
);

export default SignUp;