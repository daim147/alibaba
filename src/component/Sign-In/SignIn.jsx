import React, { useState } from "react";
import "./SignIn.styles.scss";
import { FormInput } from "../FormInput/formInput";
import CustomButton from "../custom-button/CustomButton";
import { signWithGoogle } from "../../firebase/firebase.util";

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
        <FormInput
          type="email"
          required
          value={input}
          label="Email"
          id="email"
          handleChange={(e) => setInput(e.target.value)}
        />
        <FormInput
          type="password"
          required
          value={password}
          label="Password"
          id="password"
          handleChange={(e) => setPassword(e.target.value)}
        />

        <CustomButton type="submit">Sign in </CustomButton>
        <CustomButton onClick={signWithGoogle}>
          Sign in with Google{" "}
        </CustomButton>
      </form>
    </div>
  );
};
