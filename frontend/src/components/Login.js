import React from "react";

import { BrowserRouter as Router, Link} from "react-router-dom";

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
          <button type="submit" class="btn btn-primary btn-block btn-large">
            Let me in.
          </button>
        </form>
      <Router>
        <Link to="/signup"><span class="no_account">No Account?</span></Link>
      </Router>
    </div>
  );
};

export default Login;
