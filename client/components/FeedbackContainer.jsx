import React, { Component } from 'react';
import { connect } from 'react-redux';

const FeedbackContainer = () => {
  // LOGIC FOR FEEDBACK ITEMS
  const mapStateToProps = state => ({feedbackItems: state.feedbackItems})

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
          <EmptyState />
        </section>
    )
  }
}

export default FeedbackContainer;