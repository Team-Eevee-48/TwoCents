import React from 'react';
import { connect } from 'react-redux';
import CategoryTag from './CategoryTag.jsx';

const mapStateToProps = state => ({
  category: state.feedback.category,
  username: state.user.username,
});

const Sidebar = (props) => {
  const categories = props.category.map((category, index) => {
    return <CategoryTag 
      key={index}
      category={category}
    />
  })

  return (
    <aside>
      <div className='user'><h3>{ props.username }</h3><br/><p>Feedback Board</p></div>
      <div className='category'>
        { categories }
      </div>
      <label htmlFor='Sort'>
        <select name='Sort'>
          <option value='Most Votes'>Most Votes</option>
          <option value='Least Votes'>Least Votes</option>
        </select>
      </label>
    </aside>
  )
}

export default connect(mapStateToProps, null)(Sidebar);