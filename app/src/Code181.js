import React, { useEffect, useState } from 'react';

const Code181 = () => {
    const [data, setData] = useState([]); // Full data
    const [selected, setSelected] = useState([]); // Data for the current page
    const [counter, setCounter] = useState(0); // Current page index
    const [pages, setPages] = useState(0); // Total pages

    // Fetch data from API
    useEffect(() => {
        const handleData = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const result = await response.json();
            setData(result);
        };

        handleData();
    }, []);

    // Calculate total pages when data is loaded
    useEffect(() => {
        const count = Math.ceil(data.length / 5);
        setPages(count);
        if (data.length > 0) {
            setSelected(data.slice(0, 5)); // Initialize first page data
        }
    }, [data]);

    // Update `selected` data when `counter` changes
    useEffect(() => {
        const startIndex = counter * 5;
        const endIndex = startIndex + 5;
        setSelected(data.slice(startIndex, endIndex));
    }, [counter, data]);

    // Handle button clicks
    const handleCounter = (direction) => {
        if (direction === 1 && counter < pages - 1) {
            setCounter((prev) => prev + 1);
        } else if (direction === -1 && counter > 0) {
            setCounter((prev) => prev - 1);
        }
    };

    return (
        <div>
            <h1>Pagination Example</h1>
            <div>
                {selected.map((item, index) => (
                    <div key={index}>
                        <h1>{item.title}</h1>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '20px' }}>
                <button 
                    onClick={() => handleCounter(-1)} 
                    disabled={counter === 0}
                >
                    Prev
                </button>
                <button 
                    onClick={() => handleCounter(1)} 
                    disabled={counter >= pages - 1}
                >
                    Next
                </button>
            </div>
            <p>Page {counter + 1} of {pages}</p>
        </div>
    );
};

export default Code181;
