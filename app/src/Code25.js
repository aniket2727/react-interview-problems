

// code is written by aniket kadam
// dsa problem remove all duplicates from array


const Removeduplicates=()=>{

    const handleduplicates=()=>{
        const a=[1,2,3,1,4,2]
        const arr={};
        a.forEach((item)=>{
            if(arr[item]){
                arr[item]+=1;
            }
            else{
                arr[item]=1
            }
        })
        const result=Object.keys(arr);
        console.log(result);
    }
    handleduplicates();
    return(
        <div>remove duplicates</div>
    )
};

export default Removeduplicates;