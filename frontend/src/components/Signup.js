import React from "react";

const Signup = () => {
  return (
    <div class="signup">
      <h1>Sign Up</h1>
      <form method="post" autocomplete="off">
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
        <button type="submit" class="btn btn-primary btn-block btn-large">
          Sign me in.
        </button>
      </form>
    </div>
  );
};

export default Signup;
