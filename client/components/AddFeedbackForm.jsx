import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as actions from "../redux/actions/actions";

const mapStateToProps = (state) => ({
  user_id: state.user.user_id,
  // title: state.feedback.title,
  // description: state.feedback.description,
  // votes: state.feedback.votes,
  category: state.feedback.category,
  // submissionStatus: state.feedback.submissionStatus,
  authStatus: state.user.authStatus,
});

const mapDispatchToProps = (dispatch) => ({
  addFeedbackActionCreator: (user_id, title, description, category) =>
    dispatch(
      actions.addFeedbackActionCreator(user_id, title, description, category)
    ),
});

const AddFeedbackForm = (props) => {
  const navigate = useNavigate();
  const redirectLogin = () => {
    useEffect(() => {
      navigate("/");
    }, []);
  };

  if (!props.authStatus) redirectLogin();

  useEffect(() => {
    console.log("feedbackForm", props);
  }, [props]);

  const handleClick = (e) => {
    console.log("form submitted props", props);
    const user_id = props.user_id;
    const title = document
      .querySelector('input[name="feedbackTitle"]')
      .value.trim();
    const description = document
      .querySelector('input[name="description"]')
      .value.trim();
    const category = document.querySelector("select").value;
    props.addFeedbackActionCreator(user_id, title, description, category);

    setTimeout(() => navigate("/feedback"), 100);
  };

  const options = props.category.map((category, i) => {
    return (
      <option value={category} key={i}>
        {category}
      </option>
    );
  });

  let submissionReport;
  if (props.submissionStatus === "false")
    submissionReport = "Apologies, failed to submit feedback.";

  return (
    <div className="feedbackForm">
      <h1>Create New Feedback</h1>
      <label htmlFor="feedbackTitle">
        Feedback Title
        <p>Add a short, descriptive headline</p>
        <input type="text" name="feedbackTitle"></input>
      </label>
      <label htmlFor="category">
        Category
        <p>Choose a category for your feedback</p>
        <select name="category" placeholder="Select a category">
          {options}
        </select>
      </label>
      <label htmlFor="description">
        Description
        <p>
          Include any specific comments on what should be improved, add, etc.
        </p>
        <input type="textarea" name="description"></input>
      </label>
      <div className="buttonContainer">
        <Link to="/">
          <button className="cancelBtn">Cancel</button>
        </Link>
        <button className="submitBtn" onClick={handleClick}>
          Submit Feedback
        </button>
      </div>
      <label>{submissionReport}</label>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFeedbackForm);
