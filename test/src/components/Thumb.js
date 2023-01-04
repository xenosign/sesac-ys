import { useState } from "react";


export default function Thumb() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <span style={{ fontSize: "100px" }} onClick={() => setCount(count += 1)}> {count < 10 ? "👍" : "😎"} </span>
      <br />
      <span style={{ fontSize: "100px" }}>{count}</span>
    </div>
  )
}
