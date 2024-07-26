

// code is written by aniket kadam 
// find the index of array
// use if indexof

const Findindex=()=>{

    const handle=()=>{
        const a=[1,2,3,4,5,6];
        console.log(a.indexOf(2))
        for(let i=0;i<a.length;i++){
            if(a[i]===2){
                console.log(i)

            }
        }

    }
    handle();
    return(
        <h1>find index</h1>
    )
};


export default Findindex;