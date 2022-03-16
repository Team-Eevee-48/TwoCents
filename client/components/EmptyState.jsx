import React from 'react';
import AddFeedbackBtn from './AddFeedbackBtn.jsx';

const EmptyState = () => {
  return (
    <div className='emptyState'>
      <h2>&#129300;<br/>There is no feedback yet.</h2>
      <p>
        Got a suggestion? Found a bug that needs to be squashed?
        <br/>
        We love hearing about new ideas to improve our app.
      </p>
      <br/>
      <AddFeedbackBtn />
    </div>
  )
};

export default EmptyState;