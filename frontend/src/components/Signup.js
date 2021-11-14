import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [error, setError] = useState("");

  const sign_up = async (event) => {
    event.preventDefault();
    const form_data = document.querySelector("#signup-form");
    const username = form_data.elements.username.value;
    const email = form_data.elements.email.value;
    const password = form_data.elements.password.value;
    // Send a POST request
    try {
      const req = await axios.post("http://localhost:5000/api/register", {
        email,
        username,
        password,
      });
      console.log(req);
      history.replace("/login");
    } catch (e) {
      console.log(e);
      if (e.response && e.response.data) {
        console.log(e.response.data.message); // some reason error message
      }
      try {
        setError(
          e.response.data.message ||
            e.message ||
            "Something went wrong, please try again"
        );
      } catch (e) {
        setError("Something went wrong, please try again");
      }
    }
  };
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <div className="error">{error}</div>
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
