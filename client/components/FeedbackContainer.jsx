import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar.jsx';
import FeedbackItem from './FeedbackItem.jsx';
import EmptyState from './EmptyState.jsx';
import axios from 'axios';
import * as action from '../redux/actions/actions';

const mapStateToProps = state => ({
  feedbackItems: state.feedback.feedbackItems,
  user_id: state.user.user_id
})

const mapDispatchToProps = dispatch => ({
  getFeedback: (user_id) => {
    dispatch(action.getFeedbackActionCreator(user_id))
  }
})

const FeedbackContainer = (props) => {

  useEffect(() => {
    props.getFeedback(props.user_id)
  }, [])

  const [items, setItems ] = useState(props.feedbackItems)

  useEffect(() => {
    // console.log(props.feedbackItems);
    setItems(props.feedbackItems)
  }, [props])
  
  
  const feedbackItemArray = items.map((item, idx) => {
    return <FeedbackItem info={item} key={item.title} index={idx}/>
  });

  // useEffect(() => {
  //   axios.get('/feedback')
  //   .then(data => data.json) //data.rows = [{}, ...]
  //   .then(data => {
  //     data.forEach(ele => {
  //       feedbackItemArray.push(<FeedbackItem info={ele}/>)
  //     }) 
  //   })
  // })

  if (feedbackItemArray.length) {
    return (
      <section className='feedbackContainer'>
        <NavBar key='navBarItems' />
        <div className='feedbackItemsContainer'>{feedbackItemArray}</div>
      </section>
    )
  } else {
    return (
      <section className='feedbackContainer'>
          <NavBar key='navBarEmpty' />
          <EmptyState key='emptyState' />
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackContainer);