import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDebounce } from "./useDebounce";

import "./styles.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const debouncedInputText = useDebounce(inputValue, 1000);

  useEffect(() => {
    console.log(debouncedInputText);
  }, [debouncedInputText]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
