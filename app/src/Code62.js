/* eslint-disable no-unused-vars */
// code is written by aniket kadam
//Used find instead of filter to get the first matching result (since filter returns an array).
// fiter gives all matched results

import { useState } from "react";

const Checkingdataproblems = () => {
    const [data, setData] = useState([
        { name: "aniket" },
        { name: "abhi" },
        { name: "sanket" }
    ]);

    const [inputData, setInputData] = useState('');
    const [result, setResult] = useState(null);

    const handleSearch = () => {
        const foundItem = data.find((item) => item.name.toLowerCase() === inputData.toLowerCase());
        setResult(foundItem ? foundItem.name : "No match found");
    };

    return (
        <div>
            <h1>Checking Data Problems</h1>
            <input
                style={{ border: '1px solid red' }}
                placeholder="Enter the name"
                onChange={(e) => setInputData(e.target.value)}
            />
            <button onClick={handleSearch} style={{ color: 'green' }}>Search</button>
            <h1 style={{ color: 'red' }}>{inputData}</h1>
            {
                result &&  <h1>The result is: {result}</h1>
            } 
        </
          div>
    );
}

export default Checkingdataproblems;
