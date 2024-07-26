

// code is written by aniket kadam
// dsa concate string 


const Concatestring=()=>{
    const handle=()=>{
        const a="aniket";
        const b="kadam";
        
        const result1=a+" "+b;
        console.log(result1)

        const result2=a.concat(" ",b)
        console.log(result2);


    }
    handle();
    return(
        <div>
           <h1>concate 2  strings</h1>
        </div>
    )
};


export default Concatestring;