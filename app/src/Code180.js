import React, { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // Cleanup timeout
    };
  }, [value, delay]);

  return debouncedValue;
};

const Code180 = () => {
  const [data, setData] = useState("");
  const debouncedData = useDebounce(data, 1000); // Hook handles debouncing

  return (
    <div>
      <h1>Debounce Inputs</h1>
      <input value={data} onChange={(e) => setData(e.target.value)} />
      <h1>{debouncedData}</h1>
    </div>
  );
};

export default Code180;
