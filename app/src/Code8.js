


// code is wriiten by aniket kadam
//cuuring in javascript



const Code8=()=>{

    function data(a){
        return  function(b){
            return function(c) {

                return a+b+c

            }
        }
    }
    const result= data(10)(20)(30);
    console.log(result);
    return(
        <div>
           <h1>curring in javascript</h1>
        </div>
    )
}


export default Code8;