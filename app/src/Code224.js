import React, { useState } from 'react';

// Sample folder structure (Nested folders)
const folderData = [
  {
    name: 'C Drive',
    contents: [
      { name: 'Program Files', type: 'folder', contents: ['File1.exe', 'File2.exe'] },
      { name: 'Users', type: 'folder', contents: ['User1', 'User2'] },
      'File1.txt',
    ],
  },
  {
    name: 'D Drive',
    contents: [
      { name: 'Movies', type: 'folder', contents: ['Movie1.mp4', 'Movie2.mp4'] },
      { name: 'Documents', type: 'folder', contents: ['Doc1.pdf', 'Doc2.pdf'] },
      'File2.txt',
    ],
  },
];

function FolderExplorer() {
  const [selectedFolder, setSelectedFolder] = useState(null); // State to hold selected folder

  // Handle folder click (to show its contents)
  const handleFolderClick = (folder) => {
    setSelectedFolder(folder); // Update the state with the selected folder
  };

  // Render contents of a folder (subfolders and files)
  const renderFolderContents = (contents) => {
    return contents.map((item, index) => (
      <li key={index}>
        {typeof item === 'string' ? (
          <span>{item}</span>
        ) : (
          <button onClick={() => handleFolderClick(item)}>{item.name}</button>
        )}
      </li>
    ));
  };

  return (
    <div>
      <h2>Folder Structure</h2>
      <div>
        {/* Render drives/folders */}
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
            <ul>{renderFolderContents(selectedFolder.contents)}</ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default FolderExplorer;
