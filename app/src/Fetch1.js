

// code is written  by aniket kadam

import { useEffect, useState } from "react"




const Fetchdata=(url)=>{
    const[data,setdata]=useState([]);
    const[loading,setloading]=useState(false);
    const[error,seterror]=useState(false);


    useEffect(()=>{
          const getdata=async()=>{
            try{
                setloading(false);
                const responce=await fetch(url);
                if(!responce.ok){
                    throw new Error("fail to fetch data")
                }

                const result=await responce.json();
                setdata(result);
            }
            catch(error){
                seterror(error);
            
            }
            finally{
                setloading(false);
            }
               
          }

          getdata();
    },[url]);


    return {data,loading,error};
    
};



export default Fetchdata;