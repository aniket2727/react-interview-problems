// code is written by aniket kadam
// call and applay


const CallandApplly=()=>{

    function Callcode(name,sirname){
        console.log("my name is "+name+""+sirname)

    }

    const obj={
        name:"aniket"
    }

    Callcode.call(obj,"aniket","kadam");
    Callcode.apply(obj,["aniket","kadam"])
    return(
        <h1>call and aplly</h1>
    )
}

export default CallandApplly;