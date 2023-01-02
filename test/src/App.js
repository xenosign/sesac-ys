import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ClassState from "./components/ClassState";

function App() {
  let [state, setState] = useState({ teacher: "이효석" });
  console.log(state);
  return (
    <div className="App">
      <button
        onClick={() => {
          state.teacher = "tetz";
          const copyObj = { ...state };
          setState(copyObj);
          console.log(state);
        }}
      >
        영어로!
      </button>
      <br />
      <span>{state.teacher}</span>
    </div>
  );
}
export default App;
