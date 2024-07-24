// code is written by Aniket Kadam
// custom hook for calling APIs

import React, { useEffect, useState } from "react";

// Custom Hook
const useFetchApis = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        setLoading(false);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    handleFetch();
  }, [url]);

  return { data, error, loading }; // Ensure to return the state variables
};

// Parent Component
const ParentComponent = () => {
  const url = "https://dummyjson.com/products";
  const { data, error, loading } = useFetchApis(url); // Correct usage of the custom hook

  return (
    <div>
      <h1>This is parent component</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.products.map((product) => (
            <li key={product.id}>{product.title}</li> // Use correct property name from API response
          ))}
        </ul>
      )}
    </div>
  );
};

export default ParentComponent;
