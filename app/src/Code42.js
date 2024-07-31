

//code is written by amiket kadam
// recuusrions code 
//factorial



const Recurrsion=()=>{

    function factorial(n){

        if (n===0){
            return 1;
        }
        return n*factorial(n-1)
    }

    const n=5;
console.log(factorial(n));
    return(
        <div>
           <h1>this code is recursion</h1>
        </div>
    )
}

export default Recurrsion;