import React, { useState } from 'react';
import './App.css';

function App() {
  // counter
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="App">
        {/* counter */}
        <header className="App-header">
          <h1>Counter App</h1>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </header>
      </div>
    </>
  );
}

export default App;
