import React from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Sidebar from "./components/Sidebar.jsx";
import FeedbackContainer from "./components/FeedbackContainer.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import AddFeedbackForm from "./components/AddFeedbackForm.jsx";

const App = () => {
  return (
    <section className="content">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={[<Sidebar key='sidebar' />, <FeedbackContainer key='feedbackContainer' />]}
            >
          </Route>
          <Route 
            exact 
            path="/login"
            element={<Login key='login' />}
            >
          </Route>
          <Route 
            exact 
            path="/signup"
            element={<SignUp key='signup' />}
            >
          </Route>
          <Route 
            exact 
            path="/addfeedback"
            element={<AddFeedbackForm key='addFeedbackForm' />}
            >
          </Route>
        </Routes>
      </Router>
    </section>
  )
};

export default App;