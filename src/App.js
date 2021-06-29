import React from "react";
import "./App.css";
import Homepage from "./pages/HomePage/homepage.component";
import { Route, Link, Switch } from "react-router-dom";
import { Header } from "./component/Header/Header";
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
