// Code is written by Aniket Kadam
// Search bar component

import { useMemo, useState } from "react";

const SearchbarComponent = () => {
  const [inputData, setInputData] = useState("");
  const [array] = useState(["apple", "mango", "lemon", "pineapple"]);
  const [selectedItems, setSelectedItems] = useState([]);

  const optionsAccordingToSearch = useMemo(() => {
    return array.filter((item) =>
      item.toLowerCase().includes(inputData.toLowerCase().trim())
    );
  }, [inputData, array]);

  // Update selected items when the input data changes
  useMemo(() => {
    setSelectedItems(optionsAccordingToSearch);
  }, [optionsAccordingToSearch]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Search Bar Component</h1>
      <h2 className="text-lg mb-4">Search product here</h2>

      <input
        className="border rounded p-2 w-full mb-4"
        placeholder="Enter the data"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        type="text"
      />

      {selectedItems.length > 0 ? (
        selectedItems.map((item, index) => (
          <div
            key={index}
            className="border p-2 mb-2 rounded bg-gray-100"
          >
            <h3 className="text-md">{item}</h3>
          </div>
        ))
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};

export default SearchbarComponent;
