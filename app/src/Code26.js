
// code is written by aniket kadam
// dsa problems sum of all elements


const SumofAllelElement=()=>{
    const handlesum=()=>{
        const a=[1,2,3,4,5];
        let sum=0;
        a.forEach((item)=>{
            sum+=item;
        })
        console.log(sum);

    }
    handlesum();
    return(
        <div>
          <h1>Sum of all elememt</h1>
        </div>
    )
};


export default SumofAllelElement;