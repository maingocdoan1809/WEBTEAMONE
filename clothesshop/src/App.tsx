import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(
    Number.parseInt(localStorage.getItem("counttime") ?? "0")
  );
  useEffect(() => {
    localStorage.setItem("counttime", count + "");
  });
  return (
    <>
      <h1>Hello world</h1>
      <p>Let's get started with our mini project</p>
      <p>
        <b>Mai Ngoc Doan</b>
      </p>
      <button
        onClick={() => {
          setCount((pre) => pre + 1);
        }}
        className="btn btn-primary mb-3"
      >
        Click to see how many times you clicked this button = {count}
      </button>
      <br />
      <button
        className="btn btn-danger"
        onClick={() => {
          setCount(0);
        }}
      >
        Reset count
      </button>
    </>
  );
}

export default App;
