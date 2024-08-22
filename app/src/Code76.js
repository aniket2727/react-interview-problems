// code is written by Aniket Kadam
// Add elements into the buckets

import { useState } from "react";

const AddBucket = () => {
    const [data, setData] = useState([]); // Initialize data as an array
    const [input1, setInput1] = useState('');

    const addInto = () => {
        console.log("This function is called");
        setData([...data, input1]); 
        console.log([...data, input1]);
        setInput1(''); 
    }

    return (
        <div> 
            <h1>Add into the Buckets</h1>
            <input 
                placeholder="Add into the buckets" 
                value={input1} 
                onChange={(e) => setInput1(e.target.value)} 
            />
            <button onClick={addInto}>Add</button>
            {
                data.map((item, index) => (
                    <div key={index}>
                        <h1>{item}</h1>
                    </div>
                ))
            }
        </div>
    )
};

export default AddBucket;
