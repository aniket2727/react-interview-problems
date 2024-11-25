/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

const SearchBarWithNavigation = () => {
    const [data, setData] = useState(['Virat', 'Dhoni', 'Sachin', 'Rohit']);
    const [item, setItem] = useState('');
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        if (item.trim() === '') {
            setFiltered([]);
            return;
        }

        const result = data.filter((name) =>
            name.toLowerCase().includes(item.toLowerCase().trim())
        );
        setFiltered(result);
    }, [item]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Search Bar</h1>
            <input
                value={item}
                name="item"
                onChange={(e) => setItem(e.target.value)}
                className="border p-2 w-full mb-4"
                placeholder="Search..."
            />
            <div>
                {filtered.length > 0 ? (
                    filtered.map((name, index) => (
                        <div
                            key={index}
                            className="p-2 border-b hover:bg-gray-100 cursor-pointer"
                        >
                            {name}
                        </div>
                    ))
                ) : item.trim() !== '' ? (
                    <div className="p-2 text-gray-500">No results found</div>
                ) : null}
            </div>
        </div>
    );
};

export default SearchBarWithNavigation;
