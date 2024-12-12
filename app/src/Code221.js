/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';

const Code221 = () => {
    const [data, setdata] = useState([]);
    const [counter, setcounter] = useState(0);
    const [slide, setslide] = useState([]);

    // Fetch user data from API
    useEffect(() => {
        const handleFetch = async () => {
            try {
                const response = await fetch('https://dummyjson.com/users');
                if (!response.ok) {
                    throw new Error("Error in fetching data");
                }
                const result = await response.json();
                setdata(result.users);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        handleFetch();
    }, []);

    // Update slides when data or counter changes
    useEffect(() => {
        const handleSlide = () => {
            if (data.length > 0) {
                const result = data.slice(counter * 5, counter * 5 + 5);
                setslide(result);
            }
        };
        handleSlide();
    }, [data, counter]);

    // Handle counter updates
    const handleCounter = (step) => {
        if (step > 0 && counter < Math.ceil(data.length / 5) - 1) {
            setcounter(counter + 1);
        } else if (step < 0 && counter > 0) {
            setcounter(counter - 1);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">User Slides</h1>
            <div className="flex space-x-4 mb-4">
                <button
                    onClick={() => handleCounter(-1)}
                    style={{ backgroundColor: 'red' }}
                    disabled={counter <= 0}
                >
                    Prev
                </button>
                <button
                    onClick={() => handleCounter(1)}
                    style={{ backgroundColor: 'red' }}
                    disabled={counter >= Math.ceil(data.length / 5) - 1}
                >
                    Next
                </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {slide.map((item, index) => (
                    <div key={index} className="p-4 border rounded shadow">
                        <h1 className="text-lg font-semibold">{item.firstName}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Code221;
