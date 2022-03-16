import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  failedAuthStatement: state.user.failedAuthStatement,
});

const mapDispatchToProps = dispatch => ({
  signUpActionCreator: (first_name, last_name, email, username, password) => dispatch(signUpActionCreator(first_name, last_name, email, username, password))
})

const SignUp = props => {
  const handleSubmit = e => {
    const first_name = document.querySelector('input[name="firstName]').value;
    const last_name = document.querySelector('input[name="lastName]').value;
    const email = document.querySelector('input[name="email"]').value;
    const username = document.querySelector('input[name="username]').value;
    const password = document.querySelector('input[name="password"]').value;
    props.signUpActionCreator(first_name, last_name, email, username, password);
  }

  return (
    <div className="login">
      <h2>Create an account</h2>
      <label htmlFor="first_name"> First Name
      <input type="text" name="first_name"></input>
      </label>
      <label htmlFor="last_name"> Last Name
      <input type="text" name="last_name"></input>
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
      <button className="submitBtn" onClick={handleSubmit}>Create Account</button>
      <p>{props.failedAuthStatement}</p>
      <p>Already have an account? <Link to="/login">Log In</Link></p>
    </div>
)};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);