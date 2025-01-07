import React, { useState } from 'react';

const Code247 = () => {
  const [data, setData] = useState([
    { name: 'A', child: [{ name: 'client', child: [], display: false }], display: true },
    { name: 'B', child: [], display: true },
    { name: 'C', child: [], display: true },
  ]);

  // Recursive function to handle child items
  const handleChild = (child) => {
    if (child && child.length > 0) {
      child.map((item) => {
        console.log('name is', item.name);
        console.log('status is', item.display);
        if (item.child && item.child.length > 0) {
          handleChild(item.child);
        }
      });
    }
  };

  // Function to add a new entry to the specified parent
  const handleAdd = (parent, newEntry) => {
    // Helper function to recursively add the new entry to the correct parent
    const addData = (data) => {
      return data.map((item) => {
        // If the item matches the parent, we add the new child immutably
        if (item.name === parent) {
          return {
            ...item,
            child: [...item.child, { name: newEntry, child: [], display: false }],
          };
        }

        // If the item has children, recursively add the new entry
        if (item.child && item.child.length > 0) {
          return {
            ...item,
            child: addData(item.child),
          };
        }

        // Return item as is if no match is found
        return item;
      });
    };

    // Update the state with the modified data
    setData(addData(data));
  };

  // Output the structure
  data.map((item) => {
    console.log('name is', item.name);
    console.log('status', item.display);
    if (item.child !== undefined) {
      handleChild(item.child);
    }
  });


  console.log(data)

  return (
    <div>
      <h1>Folder Structure</h1>
      <button onClick={() => handleAdd('A', 'New Client')}>Add New Client to A</button>
      <button onClick={() => handleAdd('B', 'New Client for B')}>Add New Client to B</button>
    </div>
  );
};

export default Code247;
