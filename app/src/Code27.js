

// code is written by aniket kadam
//dsa problems largestelement into the array


const  Largestelement=()=>{
    const handlelargetselement=()=>{
        const a=[,1,2,322,2,3,4];
        let max=0;
        a.forEach((item)=>{
            if(item>max){
                max=item;
            }
        })

        console.log(max);

    }

    handlelargetselement();
    return(
        <div>
        <h1>largest element into the array</h1>
        </div>
    )
};

export default Largestelement;