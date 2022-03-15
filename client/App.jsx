import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import FeedbackContainer from "./components/FeedbackContainer.jsx";

const App = () => {
  return (
    <section className="content">
      <Sidebar/>
      <FeedbackContainer />
    </section>
  )
};

export default App;
