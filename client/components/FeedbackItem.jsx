import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';

// const mapStateToProps = state => ({
//   itemId: state.feedback._id,
//   votes: state.feedback.votes,
// })

const mapDispatchToProps = dispatch => ({
  upVoteActionCreator: ({itemId, user_id, votes}) => dispatch(actions.upVoteActionCreator({itemId, user_id, votes})),
})

const FeedbackItem = props => {
  const handleClick = e => {
    const itemId = props.info._id;
    const user_id = props.info.user_id;
    const votes = props.info.votes;
    props.upVoteActionCreator(itemId, user_id, votes);
  }
  return (
    <div className="feedbackItem">
      <button className='voteBtn' id={props.info._id} onClick={handleClick}><span>&#9650;</span>{props.info.votes}</button>
      <h2 id='itemTitle'>{props.info.title}</h2>
      <p id='itemDescription'>{props.info.description}</p>
      <button className='tag'>{props.info.category}</button>
    </div>
  )
  
}

export default connect(null, mapDispatchToProps)(FeedbackItem);