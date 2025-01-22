import React, { useEffect, useState } from 'react';

const HandleDisplayfolder = ({ folder, handlestate }) => {
  const [subdata, setsubdata] = useState(folder);

  useEffect(() => {
    setsubdata(folder);
  }, [folder]);

  return (
    <div style={{ position: 'relative', marginLeft: '10px' }}>
      {typeof subdata === 'object' ? (
        <button
          onClick={() => handlestate(folder.name)}
          style={{ margin: '5px', width: '50px', cursor: 'pointer' }}
        >
          {subdata.name}
          {folder.state ? '📂' : '📁'}
          {folder.state ? ' delete' : ''}
        </button>
      ) : (
        <p style={{ margin: '0px', border: '1px solid red' }}>
          {subdata}📄
        </p>
      )}

      {subdata?.child?.length > 0 &&
        folder.state &&
        subdata.child.map((item, index) => (
          <HandleDisplayfolder key={index} folder={item} handlestate={handlestate} />
        ))}
    </div>
  );
};

const Code268 = () => {
  const [data, setdata] = useState([
    { name: 'a', child: [{ name: 'aniket', child: [], state: false }], state: false },
    { name: 'b', child: [], state: false },
    { name: 'c', child: [{ name: 'aniket.text', child: [], state: false }], state: false },
    'textfile.txt',
  ]);

  const handlestate = (root) => {
    const togglestate = (items) => {
      return items.map((item) => {
        if (typeof item === 'object') {
          if (item.name === root) {
            return { ...item, state: !item.state };
          }
          if (item.child.length > 0) {
            return { ...item, child: togglestate(item.child) };
          }
        }
        return item; // Return the item unchanged if no match
      });
    };

    setdata((prevData) => togglestate(prevData));
  };

  return (
    <div>
      <h1>Folder Structure</h1>
      {data.map((item, index) => (
        <div key={index}>
          {typeof item === 'object' ? (
            <HandleDisplayfolder folder={item} handlestate={handlestate} />
          ) : (
            <p>{item}📄</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Code268;
