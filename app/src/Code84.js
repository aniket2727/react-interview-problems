// Code is written by Aniket Kadam
// Demonstration of React JS Lifecycle methods using hooks



// JSX Rendering: React processes and renders the component's JSX.
// useEffect Execution: After the DOM update from the initial render, useEffect callbacks are executed.

import { useEffect, useState } from "react";

const Lifecycles = () => {
    const [data, setData] = useState('');

    // Component Did Mount
    useEffect(() => {
        console.log("Component is mounted");
    }, []);

    // Component Did Update
    useEffect(() => {
        console.log("Data has changed:", data);
    }, [data]);

    // Component Will Unmount
    useEffect(() => {
        return () => {
            console.log("Component is unmounted");
        };
    }, []);

    return (
        <div>
            <h1>Life cycles of React JS</h1>
            <button onClick={() => setData("new data")}>Update Data</button>
        </div>
    );
};

export default Lifecycles;
