import {  useState } from "react";

let CountInterval = null;
const Main = () => {
  const [count, setCount] = useState(0);
  const [pause, setPause] = useState(true);
  const counterFunc = () => {
    CountInterval = setInterval(() => {
        setPause(true);
      setCount((count) => count + 1);
    }, 1000);
  };
  const pauseFunc = () => {
    clearInterval(CountInterval);
    setPause(false);
  };


  return (
    <>
      <div>
        <h1>{count}</h1>
        <button
          disabled={count !== 0 && pause}
          onClick={() => {
            counterFunc();
          }}
        >
          Start
        </button>
        <button disabled={count === 0 || !pause} onClick={() => pauseFunc()}>
          Stop
        </button>
        <button
          disabled={count === 0}
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Main;
