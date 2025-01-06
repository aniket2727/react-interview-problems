import React, { useState, useEffect } from 'react';

const Code245 = () => {
  const [data, setdata] = useState([
    { name: 'aniket', age: 10 },
    { name: 'sanket', age: 10 },
    { name: 'niket', age: 10 }
  ]);

  const addItem = () => {
    setdata((prev) => [...prev, { name: 'kadam', age: 10 }]);

    // Step 2: Update 'aniket' to 'vishal' after the first update
    setdata((prev) => {
        return prev.map((item) => {
          return item.name === 'aniket' ? { ...item, name: 'vishal' } : item;
        });
      });
    
  };


 
  useEffect(() => {
    data.map((item) => {
      console.log(item);
    });
  }, [data]);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default Code245;
