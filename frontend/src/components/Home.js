import React from "react";
import { Link, useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";

const Home = () => {
  const history = useHistory();
  try{
    if (jwt.verify(localStorage.getItem("token"), process.env.REACT_APP_JWT_SECRET_KEY)) {
    history.replace("/activities")
    }
  }catch (e) {
    console.log("Welcome!")
  }
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
