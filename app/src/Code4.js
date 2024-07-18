

// code is written by aniket kadam
// callbacks and closure demonstrate



const fetchData=(callback)=>{

    setTimeout(()=>{
        
        const data='data is fetched';
        callback(data);
        
    },2000)

}



const Code4=()=>{
    
const handleData=()=>{

    fetchData((data)=>{
        alert(data)
    })
    
}
    return(
        <div>
          <h1>call backs and closusres</h1>
          <button onClick={handleData}>data</button>
        </div>
    )
}


export default Code4;