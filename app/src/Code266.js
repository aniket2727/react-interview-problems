import React, { useEffect } from 'react'
import { useState } from 'react'




const Code266 = () => {
  const [second, setsecond] = useState(0);
  const [minute, setminute] = useState('');
  const [hours, sethours] = useState('');
  const [start, setstart] = useState(false)


  useEffect(() => {
    let id;
    if (start) {
      id = setTimeout(() => {
        setsecond(second - 1);

        if (second === 0  && minute === 0 && hours === 0) {
          setstart(false);
        }

        if (second === 0 && minute>0) {
          setsecond(59)
          if (minute > 0) {
            setminute(minute - 1)
          }
          else {
            sethours(0);
            setminute(0);
            setsecond(0);
          }
        }
        else{
          if(second===0){
            setsecond(0)
          }
        }
       
        if (minute === 0) {
          if (hours > 0) {
            sethours(hours - 1);
          }
        }

      }, 1000)
    }


    return () => {
      clearTimeout(id)
    }

  }, [start, second, minute, hours]);


  const handlerefresh=()=>{
    sethours(0)
    setminute(0)
    setsecond(0)
  }
  return (
    <div>
      <h1>timmer</h1>


      <button onClick={() => setstart(!start)}>Start</button>
      <button onClick={()=>setstart(false)}>pause</button>
      <button onClick={()=>handlerefresh()}>refresh</button>


      <h1>{hours < 10 ? `0${hours}` : hours}</h1>
      <h1>{minute < 10 ? `0${minute}` : minute}</h1>
      <h1>{second < 10 ? `0${second}` : second}</h1>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <input placeholder='hours' style={{ margin: '10px' }} onChange={(e) => sethours(e.target.value)} />
        <input placeholder='minute' style={{ margin: '10px' }} onChange={(e) => setminute(e.target.value)} />
        <input placeholder='second' style={{ margin: '10px' }} onChange={(e) => setsecond(e.target.value)} />
      </div>
    </div>
  )
}

export default Code266
