


import React, { useState } from 'react'



const Child = ({ gg }) => {
    const[a,seta]=useState(0);
    const handledata=()=>{
          gg(a);
    }
return(
    <div>
        <input value={a} onChange={(e)=>seta(e.target.value)}/>
        <button onClick={()=>handledata()}>add</button>
    </div>
)

}
const Code126 = () => {

    const [data, setdata] = useState(0);

    const handledata = (item) => {
          setdata(item);
    }
    return (
        <div>
            <h1>code is written by aniket kadam</h1>
            <Child gg={handledata}/>
            <h1>{data}</h1>
        </div>
    )
}

export default Code126
