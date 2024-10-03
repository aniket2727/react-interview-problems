// code is written by Aniket Kadam

import { useState } from "react";

const Code116 = () => {
    const [data, setData] = useState([]); // Array to store multiple name-email pairs
    const [name, setName] = useState(''); // Input for name
    const [email, setEmail] = useState(''); // Input for email
    const[age,setage]=useState('');

    const handleAdd = () => {
        // Add new name-email pair to the array
        setData((prev) => [...prev, { name, email ,age}]);
        console.log(data);
        setName(''); // Clear name input
        setEmail(''); // Clear email input
        setage('')
    };

    return (
        <div>
            <h1>Adding Name and Email</h1>
            <input
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
            placeholder="Enter email"
            value={age}
            onChange={(e) => setage(e.target.value)}
        />
            <button onClick={handleAdd}>Add</button>

            <div>
                {/* Display each name-email pair */}
                {data.length > 0 && data.map((entry, index) => (
                    <div key={index}>
                        <h1>{`Name: ${entry.name}, Email: ${entry.email}`}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Code116;
