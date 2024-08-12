

//code is written by aniket kadam
// largest number in the array

const LargestNumberinarray=()=>{

    function a(){
        const a=[1,2,3,40,5,10]
        let largest=0;
        for(let i of a){
            if(i>largest){
                largest=i;
            }
        }
        console.log("this is largest defined ",largest);
    }
    a();
    return(
        <div>
          <h1>largest number in array</h1>
        </div>
    )
};



export default LargestNumberinarray;