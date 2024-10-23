import React, { useState } from 'react';

const Code142 = () => {
  const [list, setList] = useState([]); // List should be an array of objects
  const [data, setData] = useState('');

  const handleAddintoList = () => {
    if (data.trim()) {
      setList((prev) => [...prev, { name: data, status: false }]);
      setData(''); // Clear input after adding
    }
  };

  const handleCheckintoList = (itemName) => {
    setList((prev) =>
      prev.map((item) =>
        item.name === itemName ? { ...item, status: !item.status } : item
      )
    );
  };

  const handleDelete = (itemName) => {
    const filteredData = list.filter((item) => item.name !== itemName);
    setList(filteredData);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        placeholder='Enter name'
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleAddintoList}>Add</button>

      {list.map((item, index) => (
        <div key={index}>
          <h1 style={{ textDecoration: item.status ? 'line-through' : 'none' }}>
            {item.name}
          </h1>
          <input
            type='checkbox'
            checked={item.status}
            onChange={() => handleCheckintoList(item.name)}
          />
          <button onClick={() => handleDelete(item.name)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Code142;
