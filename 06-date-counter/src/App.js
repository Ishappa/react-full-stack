import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function resetBtn() {
    setCount(0);
    setStep(1);
  }
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "50px",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <span>Step:{step}</span>
      </div>

      <div style={{ padding: "8px" }}>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        {/* <span>Count: {count}</span> */}
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={resetBtn}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

// export default App;
