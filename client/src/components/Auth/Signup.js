import React from "react";
import { Link } from "react-router-dom";

import useFormState from "../../hooks/useFormState";

function Signup({ dataService, signup, getUser }) {
  const [username, setUsername, resetName] = useFormState("mfernandezfreire");
  const [password, setPassword, resetPassword] = useFormState("12345678");

  return (
    <div>
      <h1>Hello I'm a Signup form</h1>
      <form
        onSubmit={(e) => {
          debugger;
          e.preventDefault();
          signup(username, password);
          getUser(dataService);
          resetName();
          resetPassword();
        }}
      >
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={setUsername}
        />
        <label>Password:</label>
        <input
          type="text"
          name="username"
          value={password}
          onChange={setPassword}
        />
        <input type="submit" value="Signup" />
        <p>
          Do you have an account?
          <Link to={"/login"}> Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
