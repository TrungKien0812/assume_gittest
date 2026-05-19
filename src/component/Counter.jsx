import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const setDecrese = () => {
    counter > 0 ? setCounter((pre) => pre - 1) : setCounter(0);
  };
  return (
    <>
      <p>{counter}</p>
      <br />
      <button
        onClick={() => {
          setCounter((pre) => pre + 1);
        }}
        style={{ background: "green" }}
      >
        Increase
      </button>
      <button
        onClick={setDecrese}
        style={{ background: "yellow", color: "black" }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
        style={{ background: "red" }}
      >
        Reset
      </button>
    </>
  );
}
export default Counter;
