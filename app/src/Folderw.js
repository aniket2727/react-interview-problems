import React, { useEffect, useState } from 'react';

const PrintData = ({ folder, handleState, handleDelete, handleAddItems }) => {
    const [data, setData] = useState('');
    const [inputData, setInputData] = useState('');
    const [addStatus, setAddStatus] = useState(false);

    useEffect(() => {
        setData(folder);
    }, [folder]);

    const finalAdd = (parent, value) => {
        handleAddItems(parent, value);
        setAddStatus(false); // Close input after adding
        setInputData(''); // Reset input
    };

    return (
        <div style={{ position: 'relative', marginLeft: '10px' }}>
            <button
                style={{
                    width: '100px',
                    backgroundColor: data.status ? 'grey' : '',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    position: 'relative',
                    left: '10px',
                    top: '10px',
                }}
                onClick={() => handleState(data.name)}
            >
                {data.name}
            </button>

            {data.status && (
                <>
                    <button
                        onClick={() => handleDelete(data.name)}
                        style={{
                            marginLeft: '10px',
                            backgroundColor: 'red',
                            border: 'none',
                            borderRadius: '10px',
                            cursor: 'pointer',
                        }}
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => setAddStatus(!addStatus)}
                        style={{
                            marginLeft: '10px',
                            backgroundColor: 'green',
                            border: 'none',
                            borderRadius: '10px',
                            cursor: 'pointer',
                        }}
                    >
                        Add Folder
                    </button>
                </>
            )}

            {addStatus && (
                <div>
                    <input
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                        placeholder="Enter folder name"
                    />
                    <button onClick={() => finalAdd(data.name, inputData)}>Add</button>
                </div>
            )}

            <div>
                {data.status &&
                    Array.isArray(data.child) &&
                    data.child.length > 0 &&
                    data.child.map((item, index) => (
                        <PrintData
                            key={index}
                            folder={item}
                            handleState={handleState}
                            handleDelete={handleDelete}
                            handleAddItems={handleAddItems}
                        />
                    ))}
            </div>
        </div>
    );
};

const Folderw = () => {
    const [data, setData] = useState([
        { name: 'a', status: false, child: [{ name: 'sub a', status: false, child: [] }] },
        { name: 'b', status: false, child: [{ name: 'sub b', status: false, child: [] }] },
        { name: 'c', status: false, child: [{ name: 'sub c', status: false, child: [] }] },
        { name: 'd', status: false, child: [{ name: 'sub d', status: false, child: [] }] },
    ]);

    const handleState = (value) => {
        const changeState = (data) => {
            return data.map((item) => ({
                ...item,
                status: item.name === value ? !item.status : item.status,
                child: item.child ? changeState(item.child) : [],
            }));
        };

        setData(changeState(data));
    };

    const handleDelete = (value) => {
        const deleteItems = (data) => {
            return data
                .filter((item) => item.name !== value)
                .map((item) => ({
                    ...item,
                    child: item.child ? deleteItems(item.child) : [],
                }));
        };
        setData(deleteItems(data));
    };

    const handleAddItems = (parentName, newFolderName) => {
        const addItems = (data) => {
            return data.map((item) => {
                if (item.name === parentName) {
                    return {
                        ...item,
                        child: [...item.child, { name: newFolderName, status: false, child: [] }],
                    };
                } else {
                    return {
                        ...item,
                        child: addItems(item.child),
                    };
                }
            });
        };
        setData(addItems(data));
    };

    return (
        <div>
            <h1>Folder Structure</h1>
            {data.map((item, index) => (
                <div key={index}>
                    {typeof item === 'object' ? (
                        <PrintData
                            folder={item}
                            handleState={handleState}
                            handleDelete={handleDelete}
                            handleAddItems={handleAddItems}
                        />
                    ) : (
                        <p>{item}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Folderw;
