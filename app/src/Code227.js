

import React, { useState } from 'react';


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

const Code227 = () => {

    const [openFolder, setopenFolder] = useState({});

    const toggle = (foldername) => {
        setopenFolder((prev) => ({
            ...prev, [foldername]: !prev[foldername]
        }))


        console.log(openFolder);

    }


    const renderFolderContents = (contents, parentKey) => {

        return contents.map((item, index) => {
            const key = `${parentKey}-${index}`;
            if (typeof item === 'string') {
                return (
                    <div>
                        <li>{item}</li>
                    </div>
                )
            } else if (typeof item === 'object') {
                return (
                    <div key={key}>
                        <button onClick={() => toggle(key)} >{item.name}</button>
                        {
                            openFolder[key] && (<li>{renderFolderContents(item.contents, key)}</li>)
                        }
                    </div>
                )
            }

        })
    }



    return (
        <div>
            <h1>file stcruture </h1>

            {
                folderData.map((folder, index) => {

                    const key = `root-${index}`
                    return (
                        <div key={key}>
                            <button onClick={() => toggle(key)}>
                                {folder.name}
                            </button>
                            {
                                openFolder[key] && (<li>{renderFolderContents(folder.contents, key)}</li>)
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Code227


