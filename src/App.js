import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/HomePage/homepage.component";
import { Route, Switch } from "react-router-dom";
import { Header } from "./component/Header/Header";
import SignInSignUp from "./pages/sign-in-sign-up/Sign-in-Sign-up";
import ShopPage from "./pages/ShopPage/ShopPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(async (user) => {
      console.log(user, "fromm ");
      if (!user) {
        setCurrentUser(null);
        return;
      }

      const userRef = await createUserProfileDocument(user);
      userRef.onSnapshot((snap) => {
        console.log(snap.data());
        setCurrentUser({
          id: snap.id,
          ...snap.data(),
        });
      });
    });

    console.log(currentUser, "current uSEr");

    return () => {
      unSubscribe();
    };
  }, []);

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
