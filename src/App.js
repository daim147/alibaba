import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./pages/HomePage/homepage.component";
import { Route, Switch } from "react-router-dom";
import Header from "./component/Header/Header";
import SignInSignUp from "./pages/sign-in-sign-up/Sign-in-Sign-up";
import ShopPage from "./pages/ShopPage/ShopPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/userAction";

function App({ setCurrentUser }) {
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setCurrentUser(user);
        return;
      }

      const userRef = await createUserProfileDocument(user);
      userRef.onSnapshot((snap) => {
        //it will give us data and reference to the user sign in with
        setCurrentUser({
          id: snap.id,
          ...snap.data(),
        });
      });
    });

    return () => {
      unSubscribe();
    };
  }, [setCurrentUser]);

  console.log("HY APP GOT RENDERED");

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

const mapDispathToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispathToProps)(App);
