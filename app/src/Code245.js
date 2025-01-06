import React, { useState, useEffect } from 'react';

const Code245 = () => {
  const [data, setdata] = useState([
    { name: 'aniket', age: 10 },
    { name: 'sanket', age: 10 },
    { name: 'niket', age: 10 }
  ]);

  const addItem = () => {
    // Step 1: Add 'kadam' item
    setdata((prev) => {
      const updatedData = [...prev, { name: 'kadam', age: 10 }];
      return updatedData; // After adding 'kadam', set the new state
    });
  };

  const updateAniket = () => {
    // Step 2: Update 'aniket' to 'vishal'
    setdata((prev) => {
      const updatedData = prev.map((item) =>
        item.name === 'aniket' ? { ...item, name: 'vishal' } : item
      );
      return updatedData; // After updating, set the new state
    });
  };

  const deleteSanket = () => {
    // Step 3: Delete 'sanket' item
    setdata((prev) => {
      const updatedData = prev.filter((item) => item.name !== 'sanket');
      return updatedData; // After filtering, set the new state
    });
  };

  useEffect(() => {
    // This will run every time the data changes
    console.log(data);
  }, [data]);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <button onClick={updateAniket}>Update Aniket</button>
      <button onClick={deleteSanket}>Delete Sanket</button>
    </div>
  );
};

export default Code245;
