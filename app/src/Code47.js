// Code is written by Aniket Kadam
// Progress Bar

import { useState, useEffect } from "react";

// Progressbar component
const Progressbar = ({ count }) => {
    // Ensure count is within range 0-100
    const progress = Math.max(0, Math.min(count, 100));

    return (
        <div style={{ width: '200px', backgroundColor: '#e0e0e0', borderRadius: '5px' }}>
            <div
                style={{
                    width: `${progress}%`,
                    height: '30px',
                    backgroundColor: '#76c7c0',
                    borderRadius: '5px',
                    textAlign: 'center',
                    lineHeight: '30px',
                    color: '#fff',
                }}
            >
                {progress}%
            </div>
        </div>
    );
};

// Createprogressbar component
const Createprogressbar = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < 100) {
            const timer = setTimeout(() => {
                setCount(prevCount => prevCount + 1);
            }, 100);

            // Cleanup timer on component unmount
            return () => clearTimeout(timer);
        }
    }, [count]);

    return (
        <div>
            <Progressbar count={count} />
        </div>
    );
};

export default Createprogressbar;
