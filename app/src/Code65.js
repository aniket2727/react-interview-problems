

// code is written by aniket kadam
//find first and second largets and remove first


const Code65=()=>{

    var a=[1,2,3,33,4,5,3];
    let first=0;
    let second=0;

    for(let i of a){
        if(i>first){
            first=i
            second=first;
        }
    }

    console.log("the value of first is ",first);
    console.log('the value of second is ',second);

    const result=a.filter((item)=>item!==first)
    console.log("array after the removing first elements",result);
    return(
        <div>
           <h1>remove problems</h1>
        </div>
    )
}


export default Code65;