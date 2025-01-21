/* eslint-disable react-hooks/exhaustive-deps */



import React, { useEffect } from 'react'
import { useState } from 'react';


const useFetch = (url) => {
    const [data, setdata] = useState([]);
    const [error, seterror] = useState('');
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                setloading(true);
                const responce = await fetch(url);
                if (!responce) {
                    throw new Error('failed to fetch error');
                }

                const result = await responce.json();
                setdata(result);

            }
            catch (error) {
                seterror(error)
            }
            finally {
                setloading(false);
            }
        }


        fetchdata();
    }, []);



    return { data, error, loading };
};



const Code265 = () => {

    const [fetchedData, setFetchedData] = useState([]);
    const [error1, setError1] = useState('');
    const [load, setLoad] = useState('');
    const [counter, setcounter] = useState(0);
    const [pagescount,setpagescount]=useState('');
    const [responce,setresponce]=useState([]);

    const { data, error, loading } = useFetch('https://fakestoreapi.com/products');
    console.log(data);
    console.log(loading)

    useEffect(() => {
        setFetchedData(data);
        setError1(error);
        setLoad(loading);
    }, [fetchedData, error1, load])



    useEffect(()=>{

        const dataL=fetchedData.length;
        const totalpages=Math.ceil(dataL/4);
        setpagescount(totalpages);

    },[fetchedData]);


    const handleCounter = (value) => {
        if (value < 0) {
            if (counter > 0) {
                setcounter(counter - 1);
            }
        }
        else{
           if(counter<pagescount){
               setcounter(counter+1);
           }
        }
    }


    useEffect(()=>{
        const result=fetchedData.slice(counter*4,counter*4+4);  
        setresponce(result);
    },[counter]);



    // if (load) {
    //     return (
    //         <div>
    //             <h1>loading ......</h1>
    //         </div>
    //     )
    // }


    
    return (
        <div>
            <h1>fetching data   ,counter value{counter} </h1>

            {
               responce && responce.map((item,index)=>(
                    <div key={index} style={{border:'1px solid red',margin:'10px'}}>
                        <h1 style={{margin:'10px', borderBlockColor:'1px solid black'}}>{item.title}</h1>
                    </div>    
                ))
            }
            <button  style={{cursor:"pointer"}} disabled={counter===0} onClick={() => handleCounter(-1)}>prev</button>
            <button style={{cursor:'pointer'}} disabled={counter===pagescount-1} onClick={() => handleCounter(1)}>next</button>
        </div>
    )
}

export default Code265
