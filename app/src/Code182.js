import React, { useState } from 'react';

const Display = ({ data1, onclickDisplay }) => {
    const [folder, setfolder] = useState(data1);

    return (
        <div>
            {folder.map((item, index) => (
                <div key={index}>
                    <h1 onClick={() => onclickDisplay(index)}>{item.name}</h1>
                    {item.display ? <div>{item.content}</div> : null}
                </div>
            ))}
        </div>
    );
};

const Code182 = () => {
    const [data, setdata] = useState([
        { name: 'folder A', content: "this is folder a", display: false },
        { name: 'folder B', content: "this is folder b", display: false },
        { name: 'folder C', content: "this is folder c", display: false }
    ]);

    const handledisplay = (index) => {
        setdata(prevData => 
            prevData.map((item, i) => 
                i === index ? { ...item, display: !item.display } : item
            )
        );
    };

    console.log(data);

    return (
        <div>
            <Display data1={data} onclickDisplay={handledisplay} />
        </div>
    );
};

export default Code182;
