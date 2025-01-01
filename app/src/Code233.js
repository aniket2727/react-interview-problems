//callbacks


import React, { useState, useCallback } from 'react';

const Button = React.memo(({ onClick, label }) => {
  console.log(`Rendering button: ${label}`);
  return <button onClick={onClick}>{label}</button>;
});

function App() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={increment} label="Increment Count" />
      <button onClick={() => setOtherState(!otherState)}>Toggle State</button>
    </div>
  );
}

export default App;
