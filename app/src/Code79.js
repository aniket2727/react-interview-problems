// code is written by Aniket Kadam
// Update array

import { useState } from "react";

const UpdateArray = () => {
    const [data, setData] = useState(['aniket', 'simmi', 'sanket']);
    const [item, setItem] = useState('');
    const [replace, setReplace] = useState('');

    const handleSetUpdate = () => {
        const result = data.map((a) => a === item ? replace : a);
        setData(result);
    }
    
    return (
        <div>
            <h1>Update Array</h1>
            <input 
                onChange={(e) => setItem(e.target.value)} 
                placeholder="Item to replace"
                value={item}
            />
            <input 
                onChange={(e) => setReplace(e.target.value)} 
                placeholder="New value"
                value={replace}
            />
            <button onClick={handleSetUpdate}>Update Data</button>
            {
                data.map((item, index) => (
                    <div key={index}>
                        <h1>{item}</h1>
                    </div>
                ))
            }
        </div>
    );
};

export default UpdateArray;
