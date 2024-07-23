// code is written by aniket kadam
//callbacks in javacript


const CallbacksInjavascript=()=>{

    function greet(name,callback){
        console.log("welcome",name)
        callback();
    }

    function goodbye(){
        console.log("goodbye");
    }

    greet("aniket",goodbye);

    return(
        <h1>callbacks</h1>
    )
}

export default CallbacksInjavascript;