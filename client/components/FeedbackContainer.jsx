import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar.jsx';

const FeedbackContainer = () => {
  // LOGIC FOR FEEDBACK ITEMS
  const mapStateToProps = state => ({feedbackItems: state.feedbackItems})
  
  /** QUERY RESULT
   * {title: ..., description: ...}
   */

  const feedbackItemArray = []
  

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
          {/* <EmptyState /> */}
        </section>
    )
  }
}

export default FeedbackContainer;