// Code is written by Aniket Kadam
// Selection in Table Component

import { useState } from "react";

const SelectionInTable = () => {
  const [data, setData] = useState([
    { id: '1', name: "Aniket", age: "10" },
    { id: '2', name: "Sakshi", age: "10" },
    { id: '3', name: "Om", age: "10" },
    { id: '4', name: "Suraj", age: "10" },
  ]);

  const [itemsForDelete, setItemsForDelete] = useState([]);

  const deleteSelectedItems = () => {
    const updatedData = data.filter(
      (item) => !itemsForDelete.includes(item.id)
    );
    setData(updatedData);
    setItemsForDelete([]); // Clear the selection after deletion
  };

  const addSelectedItemsInList = (itemId) => {
    if (itemsForDelete.includes(itemId)) {
      setItemsForDelete(itemsForDelete.filter((id) => id !== itemId));
    } else {
      setItemsForDelete([...itemsForDelete, itemId]);
    }
  };

  return (
    <div>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ border: '1px solid red', backgroundColor: "#f8f8f8" }}>
            <th style={{ padding: "8px", border: '1px solid red' }}>Name</th>
            <th style={{ padding: "8px", border: '1px solid red' }}>Age</th>
            <th style={{ padding: "8px", border: '1px solid red' }}>Select</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} style={{ border: '1px solid red' }}>
              <td style={{ padding: "8px", border: '1px solid red' }}>{item.name}</td>
              <td style={{ padding: "8px", border: '1px solid red' }}>{item.age}</td>
              <td>
                <button onClick={() => addSelectedItemsInList(item.id)}>
                  {itemsForDelete.includes(item.id) ? 'Deselect' : 'Select'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={deleteSelectedItems}
        style={{
          backgroundColor: '#f6f6f6',
          borderRadius: '10px',
          padding: '10px',
          marginTop: '20px',
        }}
      >
        Delete Selected Items
      </button>
    </div>
  );
};

export default SelectionInTable;
