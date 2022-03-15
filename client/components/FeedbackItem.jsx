import React from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  upVoteActionCreator: () => dispatch(actions.upVoteActionCreator()),
})

const FeedbackItem = info => {
  return (
    <div>
      <button className='voteBtn' onClick='upVoteActionCreator'>{info.votes}</button>
      <h2 id='itemTitle'>{info.title}</h2>
      <p id='itemDescription'>{info.description}</p>
      <button className='tag'>{info.tags}</button>
    </div>
  )
  
}

export default FeedbackItem;