/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

// Higher Order Component (HOC)
const Hoc = (Wrapper) => {
  return (props) => {
    const [data, setData] = useState(0);

    const handleCounter = () => {
      setData((prev) => prev + 1);
    };

    return <Wrapper data={data} counterf={handleCounter} {...props} />;
  };
};

// Reusable Component
const Reuse = (props) => {
  return (
    <div>
      <h1>The counter is {props.data}</h1>
      <button onClick={props.counterf}>Increase</button>
    </div>
  );
};

// Wrapping Reuse with HOC
const Mainsender = Hoc(Reuse);

const Code203 = () => {
  return (
    <div>
      <Mainsender />
    </div>
  );
};

export default Code203;
