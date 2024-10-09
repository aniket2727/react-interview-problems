


// code is written by aniket kadam

// this is concept of writtting the funtion inside the another fiuntions
const Closures=()=>{

    function outer(){
        let a=10;
        function inner(n){
            console.log("the value of a is ",a*n);
        }

        return inner;
    };

    const v=outer();
    console.log(v(10));
    return(
        <div>
              <h1>closures</h1>
        </div>
    )
};



export default Closures;