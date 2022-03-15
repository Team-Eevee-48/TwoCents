import React from 'react';
import { connect } from 'react-redux';

const Sidebar = () => {
  return (
    <aside>
      <div className='user'>Team Eevee</div>
      <div className='category'></div>
      <label forHTML='Sort'>
        <select name='Sort'>
          <option value='Most Votes'>Most Votes</option>
          <option value='Least Votes'>Least Votes</option>
        </select>
      </label>
    </aside>
  )
}

export default Sidebar;