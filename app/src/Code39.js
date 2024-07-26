

// code is written by Aniket Kadam
// call multiple APIs using promises


// Basic Promise: Created with new Promise().
// Promise.resolve(): Creates a resolved promise.
// Promise.reject(): Creates a rejected promise.
// Promise.all(): Resolves when all promises are resolved.
// Promise.allSettled(): Resolves when all promises have settled, regardless of their outcome.
// Promise.any(): Resolves when the first promise in the iterable resolves.
// Promise.race(): Resolves or rejects as soon as one promise in the iterable resolves or rejects.


import React, { useEffect } from 'react';

const MultipleApis = () => {

    const handle = async () => {
        const promise1 = new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });

        const promise2 = new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/todos/2')
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });

        try {
            const results = await Promise.all([promise1, promise2]);
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
