import React from "react";
import "./App.css";
import Homepage from "./pages/homepage.component";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
    </div>
  );
}

export default App;
