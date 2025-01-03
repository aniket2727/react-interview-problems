import React, { useState } from 'react';

const Code238 = () => {
  const [data, setData] = useState([
    { name: 'mango', select: false },
    { name: 'apple', select: false },
  ]);

  const handleSelect = (item) => {
    setData((prev) =>
      prev.map((a) =>
        a.name === item ? { ...a, select: !a.select } : a
      )
    );
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.name}>
          <input
            type="checkbox"
            checked={item.select}
            onChange={() => handleSelect(item.name)}
          />
          <label>{item.name}</label>
        </div>
      ))}
    </div>
  );
};

export default Code238;
