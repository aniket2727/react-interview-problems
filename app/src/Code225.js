
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

function FolderExplorer1() {
  const [selectedFolder, setSelectedFolder] = useState(null); // State to hold selected folder

  // Handle folder click (to show/hide its contents)
  const handleFolderClick = (folderName) => {
    setSelectedFolder((prev) => (prev === folderName ? null : folderName));
  };

  // Render contents of a folder (subfolders and files)
  const renderFolderContents = (contents) => {
    return contents.map((item, index) => (
      <li key={index}>
        {typeof item === 'string' ? (
          <span>{item}</span>
        ) : (
          <button onClick={() => handleFolderClick(item.name)}>{item.name}</button>
        )}
        {/* If the item is a folder, render its contents recursively */}
        {typeof item === 'object' && selectedFolder === item.name && (
          <ul>{renderFolderContents(item.contents)}</ul>
        )}
      </li>
    ));
  };

  return (
    <div>
      <h2>Folder Structure</h2>
      <ul>
        {folderData.map((folder, index) => (
          <li key={index}>
            <button onClick={() => handleFolderClick(folder.name)}>{folder.name}</button>
            {/* Render contents of the folder */}
            {selectedFolder === folder.name && (
              <ul>{renderFolderContents(folder.contents)}</ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FolderExplorer1;



