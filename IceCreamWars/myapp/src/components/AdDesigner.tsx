import { useState } from "react";
import "../css/AdDesigner.css";
import Ad from "./Ad";
function AdDesignerDisplay() {
  const [flavor, setFlavor] = useState<string>("Chocolate");
  const [isLight, setIsLight] = useState(true);
  const [fontSize, setFontSize] = useState(24);

  return (
    <div className="AdDiv">
      <div className="adContainer">
        <h2 className="cursive">Ad Design</h2>
        <Ad flavor={flavor} isLight={isLight} fontSize={fontSize}/>
        <h2>What to support:</h2>

        <div className="button-bar">
          <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
          <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
          <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
        </div>

        <h2>Color Theme</h2>
        <div className="button-bar">
          <button onClick={() => setIsLight(true)}>Light</button>
          <button onClick={() => setIsLight(false)}>Dark</button>
        </div>

        <h2>Font Size</h2>
        <div className="button-bar">
          <button onClick={() => setFontSize(fontSize + 1)}>Up</button>
          <input type="number" value={fontSize}></input>
          <button onClick={() => setFontSize(fontSize - 1)}>Down</button>
        </div>
      </div>
    </div>
  );
}

export default AdDesignerDisplay;
