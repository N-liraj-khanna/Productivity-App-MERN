import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="login">
      <h1>Login</h1>
      <form method="post" autocomplete="off">
        <input
          type="text"
          name="u"
          placeholder="Username"
          required="required"
        />
        <input
          type="password"
          name="p"
          placeholder="Password"
          required="required"
        />
        <button
          class="btn-flip"
          data-back="Let me in."
          data-front="Let me in."
        >
        </button>
      </form>
      <Link to="/signup">
        <span class="no_account">No Account?</span>
      </Link>
    </div>
  );
};

export default Login;
