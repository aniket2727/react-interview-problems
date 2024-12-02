import React, { useState, useEffect } from 'react';

const Code207 = () => {
    const [data, setData] = useState([]);
    const [selectedParamsPrice, setSelectedParamsPrice] = useState([]);
    const [price, setPrice] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // Fetch data
    useEffect(() => {
        const handleFetch = async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log("Error in fetching the data", error);
            }
        };

        handleFetch();
    }, []);

    // Update selected price parameters
    useEffect(() => {
        if (price) {
            setSelectedParamsPrice((prev) => [...prev, price]);
        }
    }, [price]);

    // Filter data based on selected prices
    useEffect(() => {
        if (selectedParamsPrice.length > 0) {
            const max = Math.max(...selectedParamsPrice);
            const result = data.filter((item) => item.price < max);
            setFilteredData(result);
        } else {
            setFilteredData(data); // Default to all data if no filters are selected
        }
    }, [selectedParamsPrice, data]);

    console.log("Data is: ", data);
    console.log("Filtered data is: ", filteredData);

    return (
        <div>
            <h1>Filtering the Data</h1>
            <p>Selected Price Parameters: {selectedParamsPrice.join(', ')}</p>
            
            <h2>Products:</h2>
            {filteredData.map((item, index) => (
                <div key={index}>
                    <h3>{item.category.name}</h3>
                    <p>Price: {item.price}</p>
                </div>
            ))}

            <h1>Filter by Price</h1>
            <div>
                <input type="checkbox" onChange={() => setPrice(50)} /> <p>50</p>
                <input type="checkbox" onChange={() => setPrice(100)} /> <p>100</p>
                <input type="checkbox" onChange={() => setPrice(200)} /> <p>200</p>
            </div>

            <h1>Filter by Category</h1>
            {/* Category filtering logic can be added here */}
            <input type="checkbox" />
        </div>
    );
};

export default Code207;
