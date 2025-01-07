/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Fetchdata from './Fetch1';


const usefetchddata = (url) => {
    const [data, setdata] = useState('');
    const [error, setError] = useState('');

    const fetchData =async() => {
         try{ 
            const responce=await fetch(url);
            if(!responce.ok){
                throw new Error('failed in fetch data');
            };

            const result=await responce.json();
            setdata(result);

         }
         catch(error){
            setError(error);
         }

    }

    useEffect(()=>{
            fetchData();
    },[url]);

    
    return {data,error};
}

const Code246 = () => {
    const[displaydata,setdisplaydata]=useState([]);
    const[displayerror,displayseterror]=useState('');
    
    
    useEffect(()=>{
        const{data,error}=usefetchddata('https://api.escuelajs.co/api/v1/products');
        setdisplaydata(data);
        displayseterror(error);
    
    },[]);

   
    console.log(displaydata);

    if(displayerror){
        return(
            <div>
                <h1>failed to fetch data</h1>
            </div>
        )
    }
    
   
    return (
        <div>
            <h1>paginations</h1>
        </div>
    )
}

export default Code246
