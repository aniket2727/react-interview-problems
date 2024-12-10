
// react.memo



import React, { useState } from 'react';

const Child = React.memo(({ value }) => {
  console.log('Child re-rendered');
  return <div>Value: {value}</div>;
});

const Code219 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <Child value="Fixed Value" />
    </div>
  );
};

export default Code219;
