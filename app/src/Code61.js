import React, { useRef, useState } from 'react'
import { useEffect } from 'react';

const Avoiduseeffect = () => {
    const [count, setCount] = useState(0);
    
    const useref1 = useRef(false);

    useEffect(() => {
        if (!useref1.current) {
            useref1.current = true; // Set the ref to true after the first render
            return;
        }

        console.log("useEffect avoided");

    }, [count]) // useEffect dependency on 'count'

    return (
        <div>
            <h1>avoid useEffect</h1>
            <h1 style={{ color: 'red' }}>{count}</h1>
            <button style={{ backgroundColor: 'green' }} onClick={() => setCount(count + 1)}>Add</button>
        </div>
    );
};

export default Avoiduseeffect;
