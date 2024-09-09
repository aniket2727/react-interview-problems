

// code is written by aniket kadam


import React, { useState } from 'react';


function App() {
  const [Component, setComponent] = useState(null);

  const loadComponent = () => {
    import('./LazyComponent').then((module) => {
      setComponent(() => module.default);
    });
  };

  return (
    <div>
      <h1>Manual Code Splitting Example</h1>
      <button onClick={loadComponent}>Load Component</button>
      {Component && <Component />}
    </div>
  );
}

export default App;
