import React, { useState } from 'react';

// Component for rendering each folder and its children
const Folder = ({ folder, handleStateChange, addFolder }) => {
  const [inputData, setInputData] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddFolder = (parentName) => {
    if (inputData) {
      addFolder(parentName, inputData);
      setInputData('');
      setIsAdding(false);
    }
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <button
        style={{ backgroundColor: 'green', borderRadius: '10px', margin: '10px', padding: '10px' }}
        onClick={() => handleStateChange(folder.name)}
      >
        {folder.name}
      </button>
      <button
        style={{ backgroundColor: 'red', marginLeft: '10px' }}
        onClick={() => setIsAdding(!isAdding)}
      >
        Add Folder
      </button>

      {isAdding && (
        <div style={{ marginTop: '10px' }}>
          <input
            placeholder="Folder Name"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <button onClick={() => handleAddFolder(folder.name)}>Add</button>
        </div>
      )}

      {folder.status && folder.child && folder.child.length > 0 && (
        <div style={{ marginLeft: '20px' }}>
          {folder.child.map((child, index) => (
            child && child.name && (
              <Folder key={index} folder={child} handleStateChange={handleStateChange} addFolder={addFolder} />
            )
          ))}
        </div>
      )}
    </div>
  );
};

// Main component for managing the folder structure
const FolderStructure = () => {
  const [folders, setFolders] = useState([
    { name: 'C Drive', status: false, child: [{ name: 'Apps', status: true, child: [] }] },
    { name: 'D Drive', status: false, child: [] },
    { name: 'E Drive', status: false, child: [] },
  ]);

  const toggleFolderState = (folderName) => {
    setFolders((prev) =>
      prev.map((folder) =>
        folder.name === folderName ? { ...folder, status: !folder.status } : folder
      )
    );
  };

  const addFolder = (parentName, newFolderName) => {
    setFolders((prev) =>
      prev.map((folder) => {
        if (folder.name === parentName) {
          return { 
            ...folder, 
            child: [...folder.child, { name: newFolderName, status: false, child: [] }] 
          };
        }

        if (folder.child && folder.child.length > 0) {
          return { 
            ...folder, 
            child: folder.child.map((child) => addFolder(child.name, newFolderName)) 
          };
        }

        return folder;
      })
    );
  };

  return (
    <div>
      <h1>Folder Structure</h1>
      {folders.map((folder, index) => (
        folder && folder.name ? (
          <Folder
            key={index}
            folder={folder}
            handleStateChange={toggleFolderState}
            addFolder={addFolder}
          />
        ) : null
      ))}
    </div>
  );
};

export default FolderStructure;
