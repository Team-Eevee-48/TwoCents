import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar.jsx';
import FeedbackItem from './FeedbackItem.jsx';
import EmptyState from './EmptyState.jsx';



const FeedbackContainer = () => {
  
  const feedbackItemArray = [];

  useEffect(() => {
    axios.get('/feedback')
    .then(data => data.json)
    .then(data => {
      data.forEach(ele => {
        feedbackItemArray.push(<FeedbackItem info={ele}/>)
      }) 
    })
  })

  if (feedbackItemArray.length) {
    return (
      <section className='feedbackContainer'>
        <NavBar />
        {feedbackItemArray}
      </section>
    )
  } else {
    return (
      <section className='feedbackContainer'>
          <NavBar />
          <EmptyState />
        </section>
    )
  }
}

export default FeedbackContainer;