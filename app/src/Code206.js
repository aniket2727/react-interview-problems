import React from 'react';
import { useState } from 'react';
// Custom Hook: useCounter
const useCounter = () => {
  const [counter, setCounter] = useState(1);

  const handleIncCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecCounter = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : 0)); // Prevent counter from going below 0
  };

  return { counter, handleDecCounter, handleIncCounter };
};

// Component: Code206
const Code206 = () => {
  const { counter, handleDecCounter, handleIncCounter } = useCounter();

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncCounter}>Increment</button>
      <button onClick={handleDecCounter}>Decrement</button>
      <h1>Using Custom Hook</h1>
    </div>
  );
};

export default Code206;
