// code is written by aniket kadam
//timer

import { useState, useEffect } from "react";

const Timercode = () => {
    const [inputHours, setInputHours] = useState('');
    const [inputMinutes, setInputMinutes] = useState('');
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [totalTime, setTotalTime] = useState(0); // totalTime in seconds

    const handleStart = () => {
        let totalSeconds = (parseInt(inputHours) * 3600 || 0) + (parseInt(inputMinutes) * 60 || 0);
        setTotalTime(totalSeconds);
    };

    useEffect(() => {
        if (totalTime > 0) {
            const timer = setTimeout(() => {
                setTotalTime((prev) => prev - 1);
            }, 1000);

            return () => clearTimeout(timer); // cleanup timeout
        }
    }, [totalTime]);

    useEffect(() => {
        let displayHours = Math.floor(totalTime / 3600);
        let displayMinutes = Math.floor((totalTime % 3600) / 60);
        let displaySeconds = totalTime % 60;

        setHours(displayHours);
        setMinutes(displayMinutes);
        setSeconds(displaySeconds);
    }, [totalTime]);

    return (
        <div>
            <h1>Timer Code</h1>
            <div>
                <input
                    value={inputHours}
                    type="number"
                    onChange={(e) => setInputHours(e.target.value)}
                    placeholder="Enter hours"
                />
                <input
                    value={inputMinutes}
                    type="number"
                    onChange={(e) => setInputMinutes(e.target.value)}
                    placeholder="Enter minutes"
                />
            </div>
            <button onClick={handleStart}>Start</button>
            <h1>
                {hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
            </h1>
        </div>
    );
};

export default Timercode;
