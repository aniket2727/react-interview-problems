

// code is written by aniket kadam
// promises



const Promisesinjavascript=()=>{

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(result=>result.json())
    .then((data)=>{
        console.log("the result is ",data);
    })
    .catch((error)=>{
        console.log("the error is ",error)
    })
    return(
        <h1>promises in javasript</h1>
    )
};


export default Promisesinjavascript;