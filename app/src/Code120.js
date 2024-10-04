// code is written by aniket kadam
//timer

import { useState, useEffect } from "react";

const Timercode = () => {
    const [inputdata, setinputdata] = useState('');
    const [minute, setminute] = useState(0);
    const [second, setsecond] = useState(0);
    const [totaltime, settotaltime] = useState(0); // totaltime initialized to 0

    const handlestart = () => {
        let result = parseInt(inputdata) * 60; // convert input data to a number
        settotaltime(result);
    };

    useEffect(() => {
        if (totaltime > 0) {
            const timer = setTimeout(() => {
                settotaltime((prev) => prev - 1);
            }, 1000);

            return () => clearTimeout(timer); // cleanup timeout
        }
    }, [totaltime]);

    useEffect(() => {
        let displayminute = Math.floor(totaltime / 60);
        let displaysecond = totaltime % 60;
        setminute(displayminute);
        setsecond(displaysecond);
    }, [totaltime]);

    return (
        <div>
            <h1>Timer Code</h1>
            <input
                value={inputdata}
                type="number"
                onChange={(e) => setinputdata(e.target.value)}
                placeholder="Enter minutes"
            />
            <button onClick={handlestart}>Start</button>
            <h1>{minute} : {second < 10 ? `0${second}` : second}</h1>
        </div>
    );
};

export default Timercode;
