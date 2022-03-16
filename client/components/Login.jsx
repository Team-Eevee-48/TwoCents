import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions.js';

const mapStateToProps = state => ({
  failedAuthStatement: state.user.failedAuthStatement,
})

const mapDispatchToProps = dispatch => ({
  loginActionCreator: (email, password) => dispatch(actions.loginActionCreator(email, password))
})

const Login = props => {
  const handleSubmit = e => {
    const email = document.querySelector('input[name="email"]').value
    const password = document.querySelector('input[name="password"]').value
    props.loginActionCreator(email, password);
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <label htmlFor="email"> Email
      <input type="text" name="email"></input>
      </label>
      <label htmlFor="password"> Password
      <input type="password" name="password"></input>
      </label>
      <button className="submitBtn" onClick={handleSubmit}>Log In</button>
      <p>{props.failedAuthStatement}</p>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
)};

export default connect(mapStateToProps, mapDispatchToProps)(Login);