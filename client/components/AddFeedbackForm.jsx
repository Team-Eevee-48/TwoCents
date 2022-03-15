import React from "react";

const AddFeedbackForm = () => {
  <div>
    <h1>Create New Feedback</h1>
    <label htmlFor="feedbackTitle">Feedback Title
      <p>Add a short, descriptive headline</p>
      <input type="text" name="feedbackTitle"></input>
    </label>
    <label htmlFor="category">Category
      <p>Choose a category for your feedback</p>
      <select name="category"></select>
    </label>
    <label htmlFor="description">Description
      <p>Include any specific comments on what should be improved, add, etc.</p>
      <input type="text" name="description"></input>
    </label>
    <button className="cancelBtn">Cancel</button>
    <button className="submitBtn">Submit Feedback</button>
  </div>
}

export default AddFeedbackForm;