import React from 'react';

const EmptyState = () => {
  return (
    <div className='emptyState'>
      <h2>There is no feedback yet.</h2>
      <p>
        Got a suggestion? Found a bug that needs to be squashed?
        <br/>
        We love hearing about new ideas to improve our app.
      </p>
      <br/>
      <button className='submitBtn'>+ Add Feedback</button>
    </div>
  )
};

export default EmptyState;