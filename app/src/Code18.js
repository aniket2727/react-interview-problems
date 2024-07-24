

// code is written by aniket kadam
//call backs

const Callbacks=()=>{

    const printmessage=(message)=>{
        console.log(message);
    }

    const callbackfuntion=(message,callback)=>{
        console.log("call backs main funtions");
        setTimeout(()=>{
            callback(message);
        },2000)
    }
    
    const message="my name is aniket";
    callbackfuntion(message,printmessage);
    return(
        <div>
          <h1>callbacks</h1>
        </div>
    )
}

export default Callbacks;