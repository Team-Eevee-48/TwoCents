import React from 'react';
import { connect } from 'react-redux';
import CategoryTag from './CategoryTag.jsx';

const mapStateToProps = state => ({
  tags: state.feedback.tags,
  user: state.users.user,
});

const Sidebar = (props) => {
  const tags = props.tags.map((tag, index) => {
    return <CategoryTag 
      key={index}
      category={tag}
    />
  })

  return (
    <aside>
      <div className='user'><h3>{ props.user }</h3></div>
      <div className='category'>
        { tags }
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