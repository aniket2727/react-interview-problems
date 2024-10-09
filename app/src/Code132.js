


// code is written  by aniket kadam
// curring in javascript



const Curring=()=>{


    function a(x){
        return function(y){
            return function(z){
                return x+y+z;
            }
        }

    };
    
    
    // a(10)(20)(30)

    const ann=a(10);
    const bnn=ann(20);
    console.log(bnn(30));
    return(
        <div>
            <h1>curring in javascript</h1>
        </div>
    )
};



export default Curring;