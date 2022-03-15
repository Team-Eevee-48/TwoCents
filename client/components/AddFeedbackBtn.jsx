import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddFeedbackBtn = () => {

  handleClick = e => {
    useNavigate('/addfeedback');
  }

  return (
    <button className='submitBtn' onClick={handleClick}>
      + Add Feedback
    </button>
  )
}

export default AddFeedbackBtn;