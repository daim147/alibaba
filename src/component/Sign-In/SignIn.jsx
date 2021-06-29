import React, { useState } from "react";
import "./SignIn.styles.scss";
export const SignIn = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(input, password);
    setInput("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span>Sign with email and password </span>

      <form onSubmit={submit}>
        <input
          type="email"
          required
          value={input}
          id="email"
          onChange={(e) => setInput(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="password"
          required
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password">Password</label>

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};
