import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayingHeader from "./components/Header";
import AdDesignerDisplay from "./components/AdDesigner";
import Votes from "./components/Votes";
import Ad from "./components/Ad";

function App() {
  return (
    <div className="App">
      <DisplayingHeader user="Jake" />
      <div className="compoContainer">
        <AdDesignerDisplay />
        <div className="ad">
          <Ad flavor={"Chocolate"} isLight={false} fontSize={24} />
          <Ad flavor={"Vanilla"} isLight={true} fontSize={24} />
          <Ad flavor={"Strawberry"} isLight={false} fontSize={24} />
        </div>
        <Votes />
      </div>
    </div>
  );
}

export default App;
