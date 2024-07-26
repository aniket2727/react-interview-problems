


// code is written by aniket kadam
// dsa code array is sorted or not 

const IsarraySorted=()=>{

    const handle=()=>{
        const a=[1,2,3,4,5,6]
        for(let i=0;i<a.length-2;i++){
            if(!a[i]>a[i+1]){
                return false
            }
        }

        return true;
    }
    const result=handle();
    console.log(result);
    return(
        <div>
          <h1>array is sorted</h1>
        </div>
    )
};


export default IsarraySorted;