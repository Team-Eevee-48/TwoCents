import React from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Sidebar from "./components/Sidebar.jsx";
import FeedbackContainer from "./components/FeedbackContainer.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";

const App = () => {
  return (
    <section className="content">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={[<Sidebar />, <FeedbackContainer />]}
            >
          </Route>
          <Route 
            exact 
            path="/login"
            element={<Login />}
            >
          </Route>
          <Route 
            exact 
            path="/signup"
            element={<SignUp />}
            >
          </Route>
        </Routes>
      </Router>
    </section>
  )
};

export default App;

/**<div className="router">
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={Characters}
          />
          <Route
            exact
            path="/create"
            component={CreateCharacter}
          />
        </Switch>
      </main>
    </div> */