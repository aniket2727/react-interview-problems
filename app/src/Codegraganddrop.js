import React, { useState } from "react";

const DragAndDropList = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index); // Store the index of the dragged item
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Allow dropping by preventing default behavior
  };

  const handleDrop = (index) => {
    // Rearrange the items
    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(index, 0, draggedItem);

    setItems(newItems); // Update the state
    setDraggedIndex(null); // Reset draggedIndex
  };

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {items.map((item, index) => (
        <li
          key={index}
          draggable // Enable dragging
          onDragStart={() => handleDragStart(index)} // Triggered when dragging starts
          onDragOver={handleDragOver} // Allow dropping on this item
          onDrop={() => handleDrop(index)} // Handle dropping on this item
          style={{
            padding: "10px",
            margin: "5px 0",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "grab",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DragAndDropList;
