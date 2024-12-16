import React, { useState } from "react";

// Sample folder structure (nested folders)
const folderData = [
  {
    name: "C Drive",
    contents: [
      {
        name: "Program Files",
        type: "folder",
        contents: ["File1.exe", "File2.exe"],
      },
      {
        name: "Users",
        type: "folder",
        contents: ["User1", "User2"],
      },
      "File1.txt",
    ],
  },
  {
    name: "D Drive",
    contents: [
      {
        name: "Movies",
        type: "folder",
        contents: ["Movie1.mp4", "Movie2.mp4"],
      },
      {
        name: "Documents",
        type: "folder",
        contents: ["Doc1.pdf", "Doc2.pdf"],
      },
      "File2.txt",
    ],
  },
];

function FolderExplorer2() {
  const [openFolders, setOpenFolders] = useState({}); // State to track open folders

  // Toggle a folder's open/closed state
  const toggleFolder = (folderName) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  // Render folder contents (recursive for nested folders)
  const renderFolderContents = (contents, parentKey) => {
    return contents.map((item, index) => {
      const key = `${parentKey}-${index}`;
      if (typeof item === "string") {
        return (
          <li key={key}>
            <span>{item}</span>
          </li>
        );
      } else if (item.type === "folder") {
        return (
          <li key={key}>
            <button onClick={() => toggleFolder(key)}>
              {openFolders[key] ? "📂 " : "📁 "}
              {item.name}
            </button>
            {/* Render contents if the folder is open */}
            {openFolders[key] && (
              <ul>{renderFolderContents(item.contents, key)}</ul>
            )}
          </li>
        );
      }
      return null;
    });
  };

  return (
    <div>
      <h2>Folder Structure</h2>
      <ul>
        {folderData.map((folder, index) => {
          const key = `root-${index}`;
          return (
            <li key={key}>
              <button onClick={() => toggleFolder(key)}>
                {openFolders[key] ? "📂 " : "📁 "}
                {folder.name}
              </button>
              {/* Render folder contents if open */}
              {openFolders[key] && (
                <ul>{renderFolderContents(folder.contents, key)}</ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FolderExplorer2;
