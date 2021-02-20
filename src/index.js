import React from "react";
import ReactDOM from "react-dom";
import Context from "./Context";
import ClassContext from "./ClassContext";
import FuncContext from "./FuncContext";

import "./styles.css";

function App() {
  return (
    <Context>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <ClassContext />
      <FuncContext />
    </Context>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
