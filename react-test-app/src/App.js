import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setcounter] = useState(0);
  const [disabled, setdisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <div>
          <button
            data-testid="minusBtn"
            disabled={disabled}
            onClick={() => {
              setcounter(counter - 1);
            }}
          >
            -
          </button>
          <button
            data-testid="plusBtn"
            disabled={disabled}
            onClick={() => {
              setcounter(counter + 1);
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            data-testid="onOffBtn"
            onClick={() => {
              setdisabled(!disabled);
            }}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
