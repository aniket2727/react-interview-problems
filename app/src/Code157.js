


// custom hooks

import { useEffect, useState } from "react";

const useFetchdata=(url)=>{
    const[data,setdata]=useState('');
    const[error,seterror]=useState('');
    useEffect(()=>{
        const fetchdata=async()=>{
            try{
                const responce=await fetch(url);
                if(!responce.ok){
                    throw new Error('error fethcing')
                }

                const result=await responce.json();
                setdata(result);
            }
            catch(error){
                 console.log(error);
                 seterror(error);
            }
        }

        fetchdata();
    },[url])


    return {data,error};
}



const Printdata=()=>{
    const{data,error}=useFetchdata('https://jsonplaceholder.typicode.com/todos/1')
    console.log("data is",data);
    console.log("error is",error);
    return(
        <h1>custom  hooks</h1>
    )
};


export default Printdata;