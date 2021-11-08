import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Management Tool</h1>
      <img src="img/logo512.png" alt="Logo" width="128" height="128" />
      <div className="buttons">
        <Link to="/signup">
          <span className="text">Sign Up</span>
          <span className="line -right"></span>
          <span className="line -top"></span>
          <span className="line -left"></span>
          <span className="line -bottom"></span>
        </Link>
        <Link to="/login">
          <span className="text">Login</span>
          <span className="line -right"></span>
          <span className="line -top"></span>
          <span className="line -left"></span>
          <span className="line -bottom"></span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
