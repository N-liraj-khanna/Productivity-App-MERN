import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const sign_up = async (event) => {
    event.preventDefault();
    const form_data = document.querySelector("#signup-form");
    const username = form_data.elements.username.value;
    const email = form_data.elements.email.value;
    const password = form_data.elements.password.value;
    // Send a POST request
    await axios.post("http://localhost:5000/api/register", {
      email,
      username,
      password,
    });
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={sign_up} autoComplete="off" id="signup-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required="required"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          required="required"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required="required"
        />
        <button
          className="btn-flip"
          data-back="Sign me in."
          data-front="Sign me in."
        ></button>
      </form>
      <Link to="/login">
        <span className="have_account">I'm a member!</span>
      </Link>
    </div>
  );
};

export default Signup;
