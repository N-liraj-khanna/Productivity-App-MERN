import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Router>
        <h1>Management Tool</h1>
        <img src="img/logo512.png" alt="Logo" width="128" height="128" />
        <div className="buttons">
          <Link to="/signup">
            <span class="text">Sign Up</span>
            <span class="line -right"></span>
            <span class="line -top"></span>
            <span class="line -left"></span>
            <span class="line -bottom"></span>
          </Link>
          <Link to="/login">
            <span class="text">Login</span>
            <span class="line -right"></span>
            <span class="line -top"></span>
            <span class="line -left"></span>
            <span class="line -bottom"></span>
          </Link>
        </div>
      </Router>
    </div>
  );
};

export default Home;
