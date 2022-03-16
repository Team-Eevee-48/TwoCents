import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar.jsx';
import FeedbackItem from './FeedbackItem.jsx';
import EmptyState from './EmptyState.jsx';
import axios from 'axios';

const mapStateToProps = state => ({
  feedbackItems: state.feedback.feedbackItems,
})

const FeedbackContainer = (props) => {
  
  const feedbackItemArray = props.feedbackItems.map(item => {
    return <FeedbackItem info={item} key={item.title}/>
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
        {feedbackItemArray}
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

export default connect(mapStateToProps, null)(FeedbackContainer);