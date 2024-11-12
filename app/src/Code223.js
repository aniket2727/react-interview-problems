



import React from  'react';



const Code223=()=>{

    function printdata(){
        console.log("this is print data");
        printdata=1
    }

    printdata();
    console.log(printdata);
    console.log("the type of printdata",typeof printdata)
    return(
        <div>
            <h1>this is react code </h1>
        </div>
    )
};



export default Code223;