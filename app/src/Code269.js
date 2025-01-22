
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';



const Code269 = () => {
    const a = Array.from({ length: 5 }).fill('');
    const [data, setdata] = useState(a);


    const dataRef = useRef([]);
    console.log(data);
    console.log(dataRef);


    useEffect(()=>{
//dataRef[0].current.focus();
    },[])


    const handlekeychange = (e,index) => {
        const s=[...data];
        s[index]=e.target.value;
        setdata(s);
        if(e.target.value && index<data.length-1){
            dataRef.current[index+1].focus();
        }
         
            
    }


    const handlekeydown=(e,index)=>{
        if(e.key==='Backspace' && data[index]===''){
              if(index>0){
                dataRef.current[index-1].focus();
              }
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {
                data.map((digit, index) => (
                    <div key={index}>
                        <input style={{ margin: '2px', width: '20px', height: '25px' }}
                            key={index}
                            value={digit}
                            onKeyDown={(e) => handlekeydown(e, index)}
                            onChange={(e) => handlekeychange(e, index)}
                            max={1}
                            ref={(el) => (dataRef.current[index] = el)}
                            autoFocus={index===0}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default Code269


