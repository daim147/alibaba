import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./pages/HomePage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./component/Header/Header";
import SignInSignUp from "./pages/sign-in-sign-up/Sign-in-Sign-up";
import ShopPage from "./pages/ShopPage/ShopPage";
import checkoutPage from "./pages/checkoutPage/checkoutPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/userAction";
import { selectCurrentUser } from "./Redux/User/user-selector";
import { createStructuredSelector } from "reselect";

function App({ setCurrentUser, currentUser }) {
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

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={checkoutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
      </Switch>
    </div>
  );
}

const mapDispathToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStatetoProps, mapDispathToProps)(App);
