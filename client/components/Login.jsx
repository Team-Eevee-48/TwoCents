import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  failedAuthStatement: state.user.failedAuthStatement,
})

const mapDispatchToProps = dispatch => ({
  loginActionCreator: (username, password) => dispatch(actions.loginActionCreator(username, password))
})

const Login = props => {
  const handleSubmit = e => {
    const username = document.querySelector('input[name="username"]').value
    const password = document.querySelector('input[name="password"]').value
    props.loginActionCreator(username, password);
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <label htmlFor="username"> Username
      <input type="text" name="username"></input>
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