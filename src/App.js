import React, { useState } from "react";
import "./App.css";
import Result from "./components/Result";
import KeyPad from "./components/KeyPad";

function App() {
  const [result, setResult] = useState("");

  const ClickHandler = (buttonClicked) => {
    if (buttonClicked === "=") {
      showResult();
    } else if (buttonClicked === "CE") {
      setResult(result.slice(0, -1));
    } else if (buttonClicked === "C") {
      setResult("");
    } else {
      setResult(result + buttonClicked);
    }
  };

  const showResult = () => {
    var checkResult = "";
    if (result.includes("--")) {
      checkResult = result.replace("--", "+");
    } else {
      checkResult = result;
    }

    try {
      setResult((eval(checkResult) || "") + "");
    } catch (e) {
      setResult("error");
    }
  };

  return (
    <div className="App bg-primary mw-100 h-100">
      <h1 className="display-6 p-2 text-dark">OverReact Calculator</h1>
      <Result result={result} />
      <KeyPad ClickHandler={ClickHandler} />
    </div>
  );
}

export default App;
