import React from "react";
import { Link } from "react-router-dom";

import useFormState from "../../hooks/useFormState";

function Login({ dataService, login, getUser }) {
  const [username, setUsername, resetName] = useFormState("mfernandezfreire");
  const [password, setPassword, resetPassword] = useFormState("12345678");
  return (
    <div>
      <h1>Hello I'm a Loggin form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(username, password);
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
        <input type="submit" value="Login" />
        <p>
          Don't have account?
          <Link to={"/signup"}> Signup</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
