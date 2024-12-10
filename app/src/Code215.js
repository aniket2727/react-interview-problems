/* eslint-disable react-hooks/exhaustive-deps */
//usememeo usecall


import React from 'react';
import { useState } from 'react';
import { useMemo, useCallback } from 'react';


const Code215 = () => {
    const [data, setdata] = useState(1);

    const handlecallCounter=useCallback(()=>{
           setdata((prev)=>prev+1);
    },[])

    const responce = useMemo(() => {
        return data * 10;
    }, [data])



    return (
        <div>
            <h1>{data}</h1>
            <h1>{responce}</h1>
            <button onClick={handlecallCounter}>add</button>
        </div>
    )
};



export default Code215;