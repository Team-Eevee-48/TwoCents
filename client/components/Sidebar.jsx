import React from 'react';

const Sidebar = () => {
  return (
    <aside>
      <div className='user'></div>
      <div className='category'></div>
      <label>
        <select name='Sort'></select>
      </label>
    </aside>
  )
}

export default Sidebar;