import { useState } from "react";

function Condition() {
  let [condition, setCondition] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setCondition(!condition)}>컨디션 변경!!</button>
      <br />
      <span style={{ fontSize: "100px" }}>{condition ? "👍" : "😂"}</span>
    </div>
  );
}

export default Condition;
