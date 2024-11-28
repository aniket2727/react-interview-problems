import React, { useState } from 'react';

// Higher-Order Component
const Hoc = (Wrapper) => {
  return (props) => {
  // State is correctly used inside a functional component
    return <Wrapper {...props} color={'red'} />;
  };
};

// Reusable Component
const Reusable = (props) => {
  return (
    <h1 style={{ backgroundColor: props.color }}>
      This is HOC with color: {props.color}
    </h1>
  );
};

// MainComponent enhanced with HOC
const MainComponent = Hoc(Reusable);

// Parent Component
const Code198 = () => {
  return (
    <div>
      <MainComponent />
    </div>
  );
};

export default Code198;
