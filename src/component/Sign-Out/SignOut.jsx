import React, { useState } from "react";

import { FormInput } from "../FormInput/formInput";
import CustomButton from "../custom-button/CustomButton";
import "./SignOut.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";

const SignOut = () => {
  const [displayName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password Not Match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      ); //it will give us user id from email and pass and we will pass that object to firebase
      await createUserProfileDocument(user, { displayName });

      setName("");
      setEmail("");
      setPasword("");
      setConfirmPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signout">
      <h1 className="title">I do not have a account</h1>
      <span>Sign up with your email and password </span>
      <form onSubmit={submit}>
        <FormInput
          type="input"
          required
          label="Display Name"
          value={displayName}
          handleChange={(e) => setName(e.target.value)}
        />
        <FormInput
          type="email"
          required
          label="Email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          required
          label="Password"
          value={password}
          handleChange={(e) => setPasword(e.target.value)}
        />
        <FormInput
          type="password"
          required
          label="Confirm Password"
          value={confirmPassword}
          handleChange={(e) => setConfirmPassword(e.target.value)}
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignOut;
