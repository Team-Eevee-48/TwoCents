import React from 'react';
import { Link } from 'react-router-dom';

const AddFeedbackBtn = () => (
  <Link to="/addfeedback">
    <button className='submitBtn'>
    + Add Feedback
    </button>
  </Link>
)


export default AddFeedbackBtn;