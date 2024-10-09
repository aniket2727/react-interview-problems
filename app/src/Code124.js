


// code is written by aniket kadam



const Code124=()=>{


    function  primenumbers(n)
    {
          for(let i=2;i<n;i++){
               if(n%i===0){
                   return false;
               }
          }
        
          return true;
    }


    const result=primenumbers(7);
    console.log(result);
    return(
        <div>
            <h1>prime number</h1>
        </div>
    )
};

export default Code124;