import React, { useState } from "react";
import "./SignIn.styles.scss";
import { FormInput } from "../FormInput/formInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, signWithGoogle } from "../../firebase/firebase.util";

export const SignIn = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(input, password);
    } catch (error) {
      alert(error.message);
    }
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

        <div className="buttons">
          <CustomButton type="submit">Sign in </CustomButton>
          <CustomButton onClick={() => signWithGoogle()}>
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
