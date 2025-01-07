/* eslint-disable no-undef */
// custom hooks


import React, { useEffect } from 'react'
import { useState } from 'react';


const useFetchcode = (url) => {

    const [data, setdata] = useState('');
    const [error, seterror] = useState('')

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const responce = await fetch(url);
                if (!responce.ok) {
                    throw new Error("failed to fetch");
                }

                const result = await responce.json();
                setdata(result);
            }
            catch (error) {
                seterror(error);
            }
        }

        fetchdata();
    }, [url]);


    return { data, error };
}

const Code246 = () => {

    const [dataDisplay, setdataDisplay] = useState([]);
    const [displayerror, setdisplayerror] = useState('');
    const [counter, setcounter] = useState(0);
    const [selected, setselected] = useState([]);
    const [pagecount, setpagecount] = useState('');

    const { data, error } = useFetchcode('https://api.escuelajs.co/api/v1/products');
    //console.log("error is ",error);


    useEffect(() => {
        if (data) setdataDisplay(data);
    }, [data]);

    //console.log("the data is ",dataDisplay);

    const handleCounter = (valueCounter) => {


        if (valueCounter === 1) {
            //setcounter(counter+valueCounter);
            setcounter((prev) => prev + 1);

        } else if (valueCounter >1) {
            setcounter((prev)=>valueCounter);
        }
        else if(valueCounter===0){
            setcounter(0);
        }
        else {
            //setcounter(counter-1);
            setcounter((prev) => prev - 1);
        }

        console.log("counter", counter)
    };


    useEffect(() => {
        if (dataDisplay) {
            const totalpage = Math.ceil(dataDisplay.length / 4);
            setpagecount(totalpage);
            const selected = dataDisplay.slice(counter * 4, counter * 4 + 4);
            setselected(selected);
            console.log("seleted data is ", selected);
        }
    }, [counter, dataDisplay]);

    return (
        <div>
            <h1>counter{counter}</h1>
            <h1>pagecount{pagecount}</h1>


            {
                selected && selected.map((item, index) => (
                    <div key={index}>
                        <h1>{item.title}</h1>
                    </div>
                ))
            }

            {
                Array.from({ length: pagecount }).map((_, index) => (
                    <div key={index}>
                        <button onClick={() => handleCounter(index)}>{index + 1}</button>
                    </div>
                ))
            }

            <button disabled={counter === 1 || counter === 0} onClick={() => handleCounter(-1)}>prev</button>
            <button disabled={counter === pagecount - 1} onClick={() => handleCounter(1)}>next</button>
        </div>
    )
}

export default Code246



