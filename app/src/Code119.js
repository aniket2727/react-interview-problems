

// code is witten by aniket kadam

import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';



const Code119 = () => {
    const [data, setdata] = useState([]);
    const [name, setname] = useState('');
    const [email, setemail] = useState('');



    const handlesubmit = () => {
        console.log("handle submit button is clicked")
        setdata((prev) => ([...prev, { name, email }]))

    }

    useEffect(() => {
        console.log(data)
    }, [data])


    const handleDelete=(index)=>{
          console.log('the index is',index);
          const removeditems=data.filter((_,i)=>i!==index);
          setdata(removeditems);
    }


    
    return (
        <div>
            <h1>Input data</h1>
            <input value={name} onChange={(e) => setname(e.target.value)} />
            <input value={email} onChange={(e) => setemail(e.target.value)} />
            <button onClick={() => handlesubmit()}>add</button>


            {
                data.map((item,index)=>{
                    return(
                        <div key={index} style={{display:'flex', alignItems:'center'}}>
                            <h1>{item.name}</h1>
                            <button onClick={()=>handleDelete(index)}>delete</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Code119
