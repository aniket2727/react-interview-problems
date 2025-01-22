

import React, { useEffect } from 'react';
import { useState } from 'react';




const HandleDisplayfolder = ({ folder, handlestate }) => {
  const [subdata, setsubdata] = useState([]);

  useEffect(() => {
    setsubdata(folder);
  }, [subdata]);


  console.log("this is subdata", subdata);


  return (
    <div style={{position:'relative',marginLeft:'10px'}}>
      {
        typeof subdata==='object'?  <button onClick={() => handlestate(folder.name)} style={{ margin: '5px', width: '50px', cursor: 'pointer'}}>{subdata.name}{folder.state?'📂':'📁'}</button>:<p style={{margin:'0px',border:'1px solid red'}}>{subdata}{'📄'}</p>
      }
    
      {
        subdata?.child?.length > 0 && folder.state===true && subdata.child.map((item, index) => (
          (<HandleDisplayfolder folder={item} handlestate={handlestate} />)
        ))
      }
    </div>
  )

}

const Code268 = () => {

  const [data, setdata] = useState([
    { name: 'a', child: [{ name: 'aniket' }], state: false },
    { name: 'b', child: [], state: false },
    { name: 'c', child: ['aniket.text'], state: false },
    'textfile.txt'
  ]);


  const handlestate = (root) => {
    console.log(root)

    const a=data.map((item) => {
      return item.name === root ? { ...item, state: !item.state } : item
    })
    setdata(a);
  }

 
  return (

    <div>
      <h1>folder struture</h1>
      {
        data.map((item, index) => {
          return typeof item === 'object' ? <div key={index}><HandleDisplayfolder folder={item} handlestate={handlestate} /></div> : <div key={index}>{item}</div>
        })
      }

    </div>
  )
}



export default Code268
