import React from 'react';
import { Redirect } from 'react-router-dom';
import AddFeedbackBtn from './AddFeedbackBtn.jsx';

const NavBar = () => {

  return(
    <div className='navBar'>&#128161;&nbsp;Suggestions
      <AddFeedbackBtn />
    </div>
  )
};

export default NavBar;