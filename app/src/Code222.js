import React, { useState } from 'react';

// Sample folder data
const folderData = [
  { name: 'Folder 1', contents: ['File 1.1', 'File 1.2'] },
  { name: 'Folder 2', contents: ['File 2.1', 'File 2.2'] },
  { name: 'Folder 3', contents: ['File 3.1'] }
];

function FolderViewer() {
  // State to keep track of the selected folder
  const [selectedFolder, setSelectedFolder] = useState(null);

  // Handle folder click
  const handleFolderClick = (folder) => {
    setSelectedFolder(folder); // Set the selected folder to view its contents
  };

  return (
    <div>
      <h2>Folder Structure</h2>
      <div>
        {/* Render list of folders */}
        <ul>
          {folderData.map((folder, index) => (
            <li key={index}>
              <button onClick={() => handleFolderClick(folder)}>{folder.name}</button>
            </li>
          ))}
        </ul>
        
        {/* If a folder is selected, show its contents */}
        {selectedFolder && (
          <div>
            <h3>Contents of {selectedFolder.name}:</h3>
            <ul>
              {selectedFolder.contents.map((file, index) => (
                <li key={index}>{file}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default FolderViewer;
