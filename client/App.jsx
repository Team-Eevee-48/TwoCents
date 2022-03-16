import React from "react";
import { Routes, Route, BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Sidebar from "./components/Sidebar.jsx";
import FeedbackContainer from "./components/FeedbackContainer.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import AddFeedbackForm from "./components/AddFeedbackForm.jsx";

const App = () => useRoutes([
  { path: "/", element: <Login key='login' />},
  { path: "/login", element: <Login key='login' />},
  { path: "/signup", element: <SignUp key='signup' />},
  { path: "/feedback", element: [<Sidebar key='sidebar' />, <FeedbackContainer key='feedbackContainer' />]},
  { path: "/addfeedback", element: <AddFeedbackForm key='addFeedbackForm' />}
])

const AppWrapper = () => (
  
  <Router>
    <section className='content'>
      <App />
    </section>
  </Router>
)


export default AppWrapper;