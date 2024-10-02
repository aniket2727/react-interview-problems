import React, { useState } from 'react';

const PrintObject = ({ data, toggleFolder, openFolders }) => {
    return (
        <div>
            {Object.entries(data).map(([key, value], index) => (
                <div key={index}>
                    {typeof value === 'object' && value !== null ? (
                        <div>
                            <button onClick={() => toggleFolder(key)}>
                                {openFolders[key] ? '▼' : '►'} {key}
                            </button>
                            {openFolders[key] && (
                                <div style={{ marginLeft: '20px' }}>
                                    <PrintObject data={value} toggleFolder={toggleFolder} openFolders={openFolders} />
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <button>{value}</button>
                        </div>
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
            sub: [1, 2, 3, 4],
        },
        folder3: 'kadam',
    });

    const [openFolders, setOpenFolders] = useState({});

    const toggleFolder = (key) => {
        setOpenFolders((prev) => ({
            ...prev,
            [key]: !prev[key], // Toggle the open state
        }));
    };

    return (
        <div>
            <h1>Main Folder</h1>
            <PrintObject data={data} toggleFolder={toggleFolder} openFolders={openFolders} />
        </div>
    );
};

export default MainFolder;
