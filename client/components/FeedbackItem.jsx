import React from 'react';
import { connect } from 'react-redux';

// const mapStateToProps = state => ({
//   itemId: state.feedback._id,
//   votes: state.feedback.votes,
// })

const mapDispatchToProps = dispatch => ({
  upVoteActionCreator: ({itemId, votes}) => dispatch(actions.upVoteActionCreator({itemId, votes})),
})

const FeedbackItem = props => {
  const handleClick = e => {
    const itemId = props.info._id;
    const votes = ++props.info.votes;
    props.upVoteActionCreator(itemId, votes);
  }
  return (
    <div className="feedbackItem">
      <button className='voteBtn' onClick={handleClick}><span>&#9650;</span>{props.info.votes}</button>
      <h2 id='itemTitle'>{props.info.title}</h2>
      <p id='itemDescription'>{props.info.description}</p>
      <button className='tag'>{props.info.tags}</button>
    </div>
  )
  
}

export default connect(null, mapDispatchToProps)(FeedbackItem);