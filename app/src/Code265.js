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
    }, [url]);



    return { data, error, loading };
};



const Code265 = () => {

    const [fetchedData, setFetchedData] = useState([]);
    const [error1, setError1] = useState('');
    const [load, setLoad] = useState('');
    const [counter, setcounter] = useState(0);
    const [pagescount, setpagescount] = useState('');
    const [responce, setresponce] = useState([]);

    const { data, error, loading } = useFetch('https://fakestoreapi.com/products');
    console.log(data);
    console.log(loading)

    useEffect(() => {
        setFetchedData(data);
        setError1(error);
        setLoad(loading);
    }, [fetchedData, error1, load])



    useEffect(() => {

        const dataL = fetchedData.length;
        const totalpages = Math.ceil(dataL / 2);
        setpagescount(totalpages);

    }, [fetchedData]);


    console.log("pages count", pagescount)


    const handleCounter = (value) => {
        if (value < 0) {
            if (counter > 0) {
                setcounter(counter - 1);
            }
        }
        else {
            if (counter < pagescount) {
                setcounter(counter + 1);
            }
        }
    }


    useEffect(() => {
        const result = fetchedData.slice(counter * 2, counter * 2 + 2);
        setresponce(result);
    }, [counter,fetchedData]);



    const handleButtonSelect = (index) => {
        setcounter(index);
    }



    return (
        <div>
            <h1>fetching data   , counter value {counter} </h1>

            {
                responce && responce.map((item, index) => (
                    <div key={index} style={{ border: '1px solid red', margin: '10px' }}>
                        <h1 style={{ margin: '10px', borderBlockColor: '1px solid black' }}>{item.title}</h1>
                    </div>
                ))
            }


            <button style={{ cursor: "pointer", margin: '10px' }} disabled={counter === 0} onClick={() => handleCounter(-1)}>prev</button>
            <button style={{ cursor: 'pointer', margin: '10px' }} disabled={counter === pagescount - 1 || counter > pagescount} onClick={() => handleCounter(1)}>next</button>


            {
                counter <= 2 ? <div>{Array.from({ length: 3 }).map((_, index) => (
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <button onClick={() => handleButtonSelect(index+1)}>{index + 1}</button>
                    </div>
                ))}</div> :
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h1>...</h1>
                        {
                            counter + 4 < pagescount  ? Array.from({ length: 4 }).map((_, index) => (
                                <div key={index}>
                                    <button style={{ margin: '10px' }} onClick={() => handleButtonSelect(counter + index)}>{counter + index}</button>
                                </div>
                            )) : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <h1>....</h1>
                                {
                                    Array.from({ length: 4 }).map((_, index) => {
                                        return (
                                            <div key={index}>
                                                {
                                                    counter + index < pagescount ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <button onClick={()=>handleButtonSelect(counter-4)} style={{ margin: '10px' }}>{counter - 4}</button>
                                                    <button onClick={()=>handleButtonSelect(counter-3)}  style={{ margin: '10px' }}>{counter - 3}</button>
                                                    <button onClick={()=>handleButtonSelect(counter-2)}  style={{ margin: '10px' }}>{counter - 2}</button>
                                                    <button onClick={()=>handleButtonSelect(counter-1)}  style={{ margin: '10px' }}>{counter - 1}</button>
                                                    <button onClick={()=>handleButtonSelect(counter)}  style={{ margin: '10px' }}>{counter}</button>

                                                </div>: <button onClick={() => handleButtonSelect(counter + index)} style={{ margin: '10px'}}>{counter + index}</button> 
                                                       
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
            }
        </div>
    )
}

export default Code265
