import { useState } from "react";

const Code174 = () => {
    const [data, setData] = useState([]);
    const [item, setItem] = useState('');
    const [editValue, setEditValue] = useState(''); // For editing a value
    const [editingIndex, setEditingIndex] = useState(null); // Track the index of the item being edited

    // Add new item to the list
    const handleInput = (value) => {
        if (value.trim() === '') return; // Prevent empty items
        setData((prev) => [...prev, value]);
        setItem(''); // Clear the input field
    };

    // Delete an item from the list
    const handleDelete = (value) => {
        const selected = data.filter((item) => item !== value);
        setData(selected);
    };

    // Update an existing item
    const handleUpdate = (index) => {
        if (editValue.trim() === '') return; // Prevent empty edits
        const updatedData = [...data];
        updatedData[index] = editValue; // Update the specific index
        setData(updatedData);
        setEditingIndex(null); // Exit edit mode
        setEditValue(''); // Clear the input field
    };

    return (
        <div>
            <h1>To-Do List</h1>

            <h2>Add Element</h2>
            <input
                value={item}
                name="item"
                onChange={(e) => setItem(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={() => handleInput(item)}>Add</button>

            <h2>List:</h2>
            {data.map((item, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                    {editingIndex === index ? (
                        <>
                            <input
                                value={editValue}
                                name="editValue"
                                onChange={(e) => setEditValue(e.target.value)}
                                placeholder="Edit task"
                            />
                            <button onClick={() => handleUpdate(index)}>Save</button>
                        </>
                    ) : (
                        <>
                            <h3>{item}</h3>
                            <button onClick={() => handleDelete(item)}>Delete</button>
                            <button onClick={() => setEditingIndex(index)}>Edit</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Code174;
