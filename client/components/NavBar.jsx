import React from 'react';
import { Redirect } from 'react-router-dom';
import AddFeedbackBtn from './AddFeedbackBtn.jsx';

const NavBar = () => {

  return(
    <div className='navBar'>Suggestions
      <AddFeedbackBtn />
    </div>
  )
};

export default NavBar;