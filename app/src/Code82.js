


// code is written by aniket kadam
// curing in javascript 



const Curringjavascript=()=>{


    function outermost(price){
        return function innermost(discount){
                return price*discount;
        }
    }
    const curringobject=outermost(100);
    console.log(curringobject(2));
    return(
        <div>
           <h1  style={{borderRadius:'10px', color:'red'}}>curring in javascript</h1>

        </div>
    )
};


export default Curringjavascript;
