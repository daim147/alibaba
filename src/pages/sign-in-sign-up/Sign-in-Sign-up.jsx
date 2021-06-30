import React from "react";
import "./sign-in-sign-up.scss";
import { SignIn } from "../../component/Sign-In/SignIn";
import SignOut from "../../component/Sign-Out/SignOut";

const SignInSignUp = () => {
  return (
    <div className="signup">
      <SignIn />
      <SignOut />
    </div>
  );
};

export default SignInSignUp;
