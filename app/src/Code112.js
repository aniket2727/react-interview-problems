import React, { useState } from 'react';

const PrintObject = ({ data }) => {
    return (
        <div>
            {Object.entries(data).map(([key, value], index) => (
                <div key={index}>
                    {typeof value === 'object' && value !== null ? (
                        // Recursively render the object
                        <PrintObject data={value} />
                    ) : (
                        <h1>{value}</h1>
                    )}
                </div>
            ))}
        </div>
    );
};

const MainFolder = () => {
    const [data] = useState({
        folder1: 'aniket',
        folder2: {
            name: 'vijay',
            sub: [1, 2, 3, 4]
        },
        folder3: 'kadam'
    });

    return (
        <div>
            <h1>Main Folder</h1>
            {Object.entries(data).map(([key, value], index) => (
                <div key={index}>
                    {typeof value === 'object' && value !== null ? (
                        <PrintObject data={value} />
                    ) : (
                        <button>{value}</button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MainFolder;
