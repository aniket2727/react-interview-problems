// code is written by aniket kadam
// call and applay
// added object properites to the funtions 

const CallandApplly=()=>{

    function Callcode(name,sirname){
        console.log("my name is "+name+""+sirname)

    }

    const obj={
        name:"aniket"
    }

    Callcode.call(obj,"aniket","kadam");   // call method added to funtions
    Callcode.apply(obj,["aniket","kadam"]) // applay method added to funtions
    return(
        <h1>call and aplly</h1>
    )
}

export default CallandApplly;