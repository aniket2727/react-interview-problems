import React, { useState } from 'react';

const Code239 = () => {
  // Initialize data state as an empty object
  const [data, setdata] = useState({});

  const handleInputs = (item) => {
    const { name, value } = item.target;
    setdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    // Reset data state to an empty object after submission
    setdata({});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" onChange={(e) => handleInputs(e)} />

        <label>Email</label>
        <input name="email" onChange={(e) => handleInputs(e)} />

        <button type="submit">Print</button>
      </form>
    </div>
  );
};

export default Code239;
    