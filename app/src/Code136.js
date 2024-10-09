


// code is writen by aniket kadam

const Callbacks1=()=>{


    function a(callback){
        console.log("hello worlds");
        callback();
    }


    function b(){
        console.log("my name is aniket kadam")
    }

    a(b);
    return(
        <div>
            <h1>call backs</h1>
        </div>
    )
};

export default Callbacks1;