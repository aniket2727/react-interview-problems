


// code is written by Aniket Kadam
// Add elements into the buckets (object)

import { useState } from "react";

const AddBucket = () => {
    const [data, setData] = useState({}); // Initialize data as an object
    const [input1, setInput1] = useState('');
    const [key, setKey] = useState(''); // Additional state for the key

    const addInto = () => {
        console.log("This function is called");
        setData((prevData) => ({ ...prevData, [key]: input1 })); // Add key-value pair to the object
        console.log({ ...data, [key]: input1 });
        setInput1(''); // Clear the input after adding
        setKey('');    // Clear the key input as well
    }

    return (
        <div> 
            <h1>Add into the Buckets (Object)</h1>
            <input 
                placeholder="Key" 
                value={key} 
                onChange={(e) => setKey(e.target.value)} 
            />
            <input 
                placeholder="Value" 
                value={input1} 
                onChange={(e) => setInput1(e.target.value)} 
            />
            <button onClick={addInto}>Add</button>
            {
                Object.entries(data).map(([key, value], index) => (
                    <div key={index}>
                        <h1>{key}: {value}</h1>
                    </div>
                ))
            }
        </div>
    )
};

export default AddBucket;
