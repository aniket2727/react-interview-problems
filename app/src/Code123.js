


// code sis written by aniket kadam


const Code123=()=>{


    function factorial(n){
        if(n===0){
            return 1;
        }

        return n*factorial(n-1);
        
    }

    const result=factorial(5);
    console.log("the result is ",result)
    return(
        <div>
            <h1>factorilas code </h1> 
        </div>
    )
};

export default Code123;