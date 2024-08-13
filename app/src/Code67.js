

//code is written by aniket kadam
//swap 2 numbers



const Code67=()=>{
    let a=10;
    let c=220;
    //[a,c]=[c,a]

   
    // Swapping using arithmetic operations
    a = a + c; // a becomes 230
    c = a - c; // c becomes 10
    a = a - c; // a becomes 220


    console.log("the value of a is "+a+"the value of b is"+c)

    return(
        <div>
          <h1>swap 2 numbers</h1>
        </div>
    )
}


export default Code67;