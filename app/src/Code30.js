

// code is written by aniket kadam
// merge 2 array

const MergeArray=()=>{

    const a=[1,2,3,4,5];
    const b=[6,7,8,9,10];
    
    // spread operators
    const result1=[...a,...b];
    console.log("result1 is ",result1);


    // for loop
    const result2=new Array();

    a.forEach((item)=>{
        result2.push(item);
    })

    b.forEach((item)=>{
        result2.push(item);
    })

    console.log("result 2 is ",result2);
    return(
        <div>
           <h1>merge array</h1>
        </div>
    )
};


export default MergeArray;