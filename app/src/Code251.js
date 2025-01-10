import React, { useEffect } from 'react'

const Code251 = () => {

    // const AddData = () => {
    //     console.log("Add data is running")
    // }


    // console.log("Before fetching data");

    //   const fetchdata=()=>{
    //     setTimeout(()=>{
    //          console.log("data is print ")
    //     },[1000]);
    // };

    // fetchdata();

    // console.log("After fetching data");



    // useEffect(() => {
    //     AddData();
    // }, []);


    function fetchdata(callback) {
        setTimeout(() => {
            console.log("Data fetched");
            callback();
        }, 1000);
    }
    
    fetchdata(() => {
        console.log("Task A completed");
        fetchdata(() => {
            console.log("Task B completed");
        });
    });
    

    return (
        <div>
            <h1>Code251</h1>
        </div>
    )
}

export default Code251
