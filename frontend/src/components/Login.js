import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const login = async (event) => {
    event.preventDefault();
    const form_data = document.querySelector("#login-form");
    const username = form_data.elements.username.value;
    const password = form_data.elements.password.value;
    // Send a POST request
    try {
      const req = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      if (req.data.user) {
        console.log("Login Successful");
        localStorage.setItem("token", req.data.user);
        history.replace("/activities");
      }
    } catch (e) {
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
    <div className="login">
      <h1>Login</h1>
      <div className="error">{error}</div>
      <form onSubmit={login} id="login-form" method="post" autoComplete="off">
        <input
          type="text"
          name="username"
          placeholder="Username or Email"
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
          data-back="Let me in."
          data-front="Let me in."
        ></button>
      </form>
      <Link to="/signup">
        <span className="no_account">No Account?</span>
      </Link>
    </div>
  );
};

export default Login;
