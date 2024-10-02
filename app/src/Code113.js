// code is written by aniket kadam

import { useState } from "react";

const Experiments = () => {
    // Corrected: Only one argument for useState
    const [data] = useState({ 'name': 'aniket' });

    const user = {
        name: 'Aniket',
        age: 25,
        profession: 'Developer'
    };
    
    // Using Object.entries to log the first key-value pair
    const entries = Object.entries(user);
    console.log("the name is ", entries[0][0]);

    // Iterating through key-value pairs of the user object
    Object.entries(user).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
    
    return (
        <div>
            <h1>This is experiment videos</h1>
            {
                Object.entries(data).map(([key, value], index) => (
                    <div key={index}>
                        <h1>{value}</h1>
                    </div>
                ))
            }
        </div>
    );
}

export default Experiments;
