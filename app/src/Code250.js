import React, { useState, useEffect } from 'react';

const Printdata = ({ folder, handlestate, add }) => {
  const [folderData, setfolderData] = useState([]);
  const [inputData, setinputData] = useState('');
  const [inputDatastate, setinputDatastate] = useState({ name: '', state: false });

  useEffect(() => {
    setfolderData(folder);
  }, [folder]);

  const handleUpdatestate = (item) => {
    setinputDatastate((prev) => ({
      ...prev,
      name: item,
      state: !prev.state,
    }));
  };

  const handleAddstate = (parentname) => {
    add(parentname, inputData);
    setinputDatastate({ name: '', state: false });
    setinputData('');
  };

  return (
    Array.isArray(folderData) &&
    folderData.map((item, index) => {
      // Ensure item is defined before accessing its properties
      if (!item || !item.name) return null;

      return (
        <div key={index}>
          <button
            style={{ backgroundColor: 'green', borderRadius: '10px', margin: '10px', padding: '10px' }}
            onClick={() => handlestate(item.name)}
          >
            {item.name}
          </button>
          <button style={{ backgroundColor: 'red' }} onClick={() => handleUpdatestate(item.name)}>
            Add
          </button>

          <div>
            {/* Correct the condition to check for undefined */}
            {inputDatastate.state && inputDatastate.name === item.name && (
              <>
                <input
                  placeholder="Add to folder"
                  value={inputData}
                  onChange={(e) => setinputData(e.target.value)}
                />
                <button onClick={() => handleAddstate(item.name)}>Add data</button>
              </>
            )}
          </div>

          {item.status === true && item.child && item.child.length > 0 ? (
            <Printdata folder={item.child} handlestate={handlestate} add={add} />
          ) : null}
        </div>
      );
    })
  );
};

const Code250 = () => {
  const [data, setdata] = useState([
    { name: 'c drive', child: [{ name: 'app', child: [], status: true }], status: false },
    { name: 'd drive', child: [], status: false },
    { name: 'f drive', child: [], status: false },
    { name: 'g drive', child: [], status: false },
  ]);

  const handleUpdateState = (parent) => {
    setdata((prev) => {
      return prev.map((item) =>
        item.name === parent ? { ...item, status: !item.status } : item
      );
    });
  };

  const handleAddstate = (parent, newobject) => {
    setdata((prev) => {
      return prev.map((item) => {
        if (item.name === parent) {
          // Add new folder to the child
          return { 
            ...item, 
            child: [...item.child, { name: newobject, child: [], status: false }] 
          };
        }

        // Recursively find the parent in nested children
        if (item.child && item.child.length > 0) {
          return {
            ...item,
            child: item.child.map((childItem) => handleAddstate(childItem.name, newobject))
          };
        }

        return item;
      });
    });
  };

  return (
    <div>
      <h1>folder structure</h1>
      {Array.isArray(data) &&
        data.map((item, index) => (
          typeof item === 'object' ? (
            <Printdata folder={[item]} handlestate={handleUpdateState} add={handleAddstate} />
          ) : (
            item
          )
        ))}
    </div>
  );
};

export default Code250;
