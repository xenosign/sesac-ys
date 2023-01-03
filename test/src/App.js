import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ClassState from "./components/ClassState";

function App() {
  let [count, setCount] = useState(0);
  return (
    <div className="App">
      <span style={{ fontSize: "100px" }} onClick={() => setCount(count += 1)}> {count < 10 ? "👍" : "😎"} </span>
      <br />
      <span style={{ fontSize: "100px" }}>{count}</span>
    </div>
  );
}
export default App;
