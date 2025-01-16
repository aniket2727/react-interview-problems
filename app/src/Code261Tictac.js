import React, { useState, useEffect } from 'react';

const Code261Tictac = () => {
  const [tic, settic] = useState([]);
  const[playerstatus,setplayerstatus]=useState('first');

  useEffect(() => {
    const d = new Array(3).fill(null).map(() => new Array(3).fill(""));
    console.log(d);
    settic(d);
  }, []);


  const handleplayerStatus=()=>{
          setplayerstatus(prev=>(prev==='first'?'second':'first'))
  }

  console.log('player status',playerstatus)

  return (
    <div>
        <button  style={{marginBottom:'10px'}} onClick={()=>handleplayerStatus()}>change player</button>
      {tic.map((item, index) => (
        <div key={index} style={{ display: 'flex' , }}>
          {item.map((_, cellIndex) => (
            <div
              key={cellIndex}
              style={{
                border: '1px solid black', // Corrected 'soild' to 'solid'
                height: '30px', // Increased height for better visibility
                width: '30px', // Increased width for better visibility
                backgroundColor: 'green',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Optionally, you can add a symbol here */}
            </div>
          ))}
        </div>
      ))}
    </div>

  );
};

export default Code261Tictac;
