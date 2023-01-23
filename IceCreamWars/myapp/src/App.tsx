import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayingHeader from "./components/Header";
import AdDesignerDisplay from "./components/AdDesigner";
import Votes from "./components/Votes";

function App() {
  return (
    <div className="App">
      <DisplayingHeader />
      <div className="compoContainer">
        <AdDesignerDisplay />
        <Votes />
      </div>
    </div>
  );
}

export default App;
