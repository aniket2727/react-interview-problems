// code is written by Aniket Kadam
// call multiple APIs

import React, { useEffect } from 'react';

const MultipleApis = () => {

    const handle = async () => {
        try {
            const urls = [
                'https://jsonplaceholder.typicode.com/todos/1',
                'https://jsonplaceholder.typicode.com/todos/2',
                'https://jsonplaceholder.typicode.com/todos/3'
            ];

            const fetchPromises = urls.map(url => fetch(url).then(response => response.json()));

            const results = await Promise.all(fetchPromises);

            console.log('API responses:', results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        handle();
    }, []);

    return (
        <div>
            <h1>Call Multiple APIs</h1>
        </div>
    );
};

export default MultipleApis;
