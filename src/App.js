import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/HomePage/homepage.component";
import { Route, Switch } from "react-router-dom";
import { Header } from "./component/Header/Header";
import SignInSignUp from "./pages/sign-in-sign-up/Sign-in-Sign-up";
import ShopPage from "./pages/ShopPage/ShopPage";
import { auth } from "./firebase/firebase.util";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user)); //it will return unsbscribe method
    // console.log(currentUser, "inUseEFFECT");
    return () => {
      // console.log("hello unsubribe me");
      unSubscribe();
    };
  }, [currentUser]);

  // console.log(currentUser);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
