

// code is written by aniket kadam
// code is written by Aniket Kadam
// code is written by Aniket Kadam

import React from 'react';
import { useState } from 'react';
const ChildComponent = React.memo(({ name }) => {
    console.log('ChildComponent rendered');

    return (
        <div>
            <h2>Child Component</h2>
            <p>Name: {name}</p>
        </div>
    );
});





const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Aniket Kadam");

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={() => setName("John Doe")}>Change Name</button>
            <p>Count: {count}</p>
            <ChildComponent name={name} />
        </div>
    );
};

export default ParentComponent;
