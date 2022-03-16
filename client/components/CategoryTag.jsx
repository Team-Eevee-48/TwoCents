import React from 'react';
import { connect } from 'react-redux';

// const mapDispatchToProps = dispatch => ({
//   handleClick: () => dispatch()
// })

const CategoryTag = (props) => (
  <button className='tag'>{ props.category }</button>
);

export default connect(null, null)(CategoryTag);