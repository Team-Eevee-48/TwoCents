import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';

const mapStateToProps = state => {
  // console.log('', state);
  return ({ 
    global_user_id: state.user.user_id
  })
}

const mapDispatchToProps = dispatch => ({
  upVoteActionCreator: (itemId, user_id, votes) => dispatch(actions.upVoteActionCreator(itemId, user_id, votes)),
})

const FeedbackItem = props => {
  const [votes, setVotes] = useState(props.info.votes)
  useEffect(() => {
    setVotes(props.info.votes)
    console.log('vote changed', votes);
  }, [props.info.votes])

  const handleClick = e => {
    // console.log('props', props)
    const itemId = props.info._id;
    const user_id = props.global_user_id;
    const votes = props.info.votes;
    isActive ? false : true;
    props.upVoteActionCreator(itemId, user_id, votes);
  }

  const isActive = false;

  return (
    <div className="feedbackItem">
      <button className='voteBtn' id={props.info._id} onClick={handleClick}><span>&#9650;</span>{votes}</button>
      <h2 id='itemTitle'>{props.info.title}</h2>
      <p id='itemDescription'>{props.info.description}</p>
      <button className='tag'>{props.info.category}</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackItem);