import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddFeedbackBtn = () => {
  
  return (
    <Link to='/addfeedback'>
      <button className='submitBtn'>
      + Add Feedback
      </button>
    </Link>
)}

export default AddFeedbackBtn;
