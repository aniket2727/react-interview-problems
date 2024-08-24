

// code is written by aniket kadam
//  constrution funtion in javascript



const Constrution=()=>{

    function con(name,value){
            this.name=name;
            this.value=value;
    }


    const object=new con("aniket","100");
    console.log("the name is",object.name);
    console.log("the value of age is",object.value);

    
    return(
        <div>
           <h1>construtions functions in javascript</h1>
        </div>
    )
};



export default Constrution;