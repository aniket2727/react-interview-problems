




import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
const Code278 = () => {


    const [data, setdata] = useState([]);

    useEffect(() => {

        const handleFetch = async () => {
            try {

                const responce = await fetch('https://fakestoreapi.com/products')
                if (!responce.ok) {
                    throw new Error('failed to fetch');
                }

                const result=await responce.json();
                setdata(result);


            }
            catch (error) {
                  console.log(error);
            }

        }

        handleFetch();

    }, []);


    const [counter,setcounter]=useState(0);
    const [last,setlast]=useState('');
    const [selected,setselected]=useState([]);


    const handlecounter=(value)=>{
             if(value>0){
                setcounter(counter+1)
             }
             else{
                setcounter(counter-1)
             }
    }


    useEffect(()=>{
       const length=data.length;
       const pages=Math.ceil(length/3)
       setlast(pages) 


       const handleselctedData=()=>{
              const s=data.slice(counter*3,counter*3+3)
              setselected(s);
       }

       handleselctedData();
    },[counter])

    return (
        <div>
            <h1>{counter}</h1>
            <h1>{last}</h1>
            <button disabled={counter===0} onClick={()=>handlecounter(-1)}>prev</button>
            <button disabled={counter===last-1} onClick={()=>handlecounter(+1)} >next</button>

            {
                selected && selected.map((item,index)=>(
                    <div key={index}>
                        <h1>{item.title}</h1>
                    </div>    
                ))
            }


        </div>
    )
}

export default Code278



