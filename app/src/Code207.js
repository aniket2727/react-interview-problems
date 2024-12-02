


//   selections
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const Code207 = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        const handleFetch = async () => {
            const responce = await fetch('https://api.escuelajs.co/api/v1/products');
            try {
                if (!responce.ok) {
                    throw new Error("failed to fetch");
                }

                const result = await responce.json();
                setdata(prev => result);

            }
            catch (error) {
                console.log("error in fetching the data");
            }
        };

        handleFetch();
    }, []);
    console.log("data is ", data);
    return (
        <div>
            <h1>filtering the data</h1>
        </div>
    )
}
    ;



export default Code207;

