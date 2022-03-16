import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
  username: state.users.username,
  title: state.feedback.title,
  description: state.feedback.description,
  votes: state.feedback.votes,
  tags: state.feedback.tags,
})


const mapDispatchToProps = dispatch => ({
  addFeedbackThunk: ({username, title, description, votes, tags}) => dispatch(actions.addFeedbackThunk({username, title, description, votes, tags}))
})

const AddFeedbackForm = props => {
  const handleClick = e => {
    const username = props.username;
    const title = document.querySelector('input[name="feedbackTitle"]').value.trim();
    const description = document.querySelector('input[name="description"]').value.trim();
    const tags = document.querySelector('select').value
    props.addFeedbackThunk(username, title, description, 0, tags);
  }
  
  const options = props.tags.map(tag => {
    return <option value={tag}>{tag}</option>
  });

  return (
    <div className="feedbackForm">
      <h1>Create New Feedback</h1>
      <label htmlFor="feedbackTitle">Feedback Title
        <p>Add a short, descriptive headline</p>
        <input type="text" name="feedbackTitle"></input>
      </label>
      <label htmlFor="category">Category
        <p>Choose a category for your feedback</p>
        <select name="category" placeholder="Select a category">
        {options}
        </select>
      </label>
      <label htmlFor="description">Description
        <p>Include any specific comments on what should be improved, add, etc.</p>
        <input type="textarea" name="description"></input>
      </label>
      <div className="buttonContainer">
        <Link to="/"><button className="cancelBtn">Cancel</button></Link>
        <button className="submitBtn" onClick={handleClick}>Submit Feedback</button>
      </div>
    </div>
)};

export default connect(mapStateToProps, mapDispatchToProps)(AddFeedbackForm);