

// code is written by aniket kadam
// second largest element


const Secondlargestelement=()=>{
    const handle=()=>{
        var max=0
        var second_max=0

        const a=[1,2,3,4,5];
        a.forEach((item)=>{
            if(item>max){
                second_max=max;
                max=item;
            }
        })

        console.log(second_max);
    }
    handle();
    return(
        <div>
           <h1>second largest element</h1>
        </div>
    )
}


export default  Secondlargestelement;