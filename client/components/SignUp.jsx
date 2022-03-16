import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  signUpActionCreator: (firstName, lastName, email, username, password) => dispatch(signUpActionCreator(firstName, lastName, email, username, password))
})

const SignUp = props => {
  const handleSubmit = e => {
    const firstName = document.querySelector('input[name="firstName]').value;
    const lastName = document.querySelector('input[name="lastName]').value;
    const email = document.querySelector('input[name="email"]').value;
    const username = document.querySelector('input[name="username]').value;
    const password = document.querySelector('input[name="password"]').value;
    props.signUpActionCreator(firstName, lastName, email, username, password);
  }

  return (
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
)};

export default connect(null, mapDispatchToProps)(SignUp);