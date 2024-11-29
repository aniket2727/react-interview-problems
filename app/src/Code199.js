/* eslint-disable react-hooks/exhaustive-deps */


import React from 'react';
import {useState,useEffect} from 'react';


const Code199=()=>{
    const[data,setdata]=useState('');
    const[counter,setcounter]=useState(0);
    //const[pagecounte,setpagecount]=useState(5);
    const[selecteData,setSelectedData]=useState('')
    useEffect(()=>{
            const handleFetchData=async()=>{
                try{
                    const responce=await fetch('https://fakestoreapi.com/products');
                    if(!responce.ok){
                        throw new Error("failed to fetch")
                    
                    }
                    const result=await responce.json();
                    setdata(result);
                }
                catch(error){
                    console.log(error);
                }
            }
            handleFetchData();
    },[]);
    console.log("data get from fetching",data)
    
    //const totalpages=Math.ceil(data.length/5);
    
    useEffect(()=>{
        const selected=data.slice(counter*5,counter*5+5);
        setSelectedData(selected);
    },[counter]);

    const handleNext=()=>{
         setcounter(prev=>prev+1);
    }

    const handlePrev=()=>{
           setcounter(prev=>prev-1);
    }


    console.log("selected data is ",selecteData)
    
    return(
        <div>
               <h1>data fetch and pagination</h1>
               <button onClick={()=>handlePrev()}>prev</button>
               <button onClick={()=>handleNext()}>next</button>

               {
                   selecteData && selecteData.map((item,index)=>(
                    <div key={index}>
                          <h1>{item.title}</h1>
                    </div>    
                   ))
               }   
        </div>
    )
};


export default Code199;


