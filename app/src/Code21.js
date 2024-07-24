// code is written by Aniket Kadam
// parent to child data transfer

import React, { useState } from "react";

// Child Component
const Child = ({ increment }) => {
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>This is child component</h1>
    </div>
  );
};

// Parent Component
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleCounter = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <h1>This is parent component</h1>
      <Child increment={handleCounter} />
    </div>
  );
};

export default ParentComponent;
