

// array flattner


const Code185=()=>{
    const data=[1,2,3,[1,2,3],3,[3,3,4,5]];
    
    const flatnerarray=[];

    function a(data){
        for(let i=0;i<data.length;i++){
            if(!Array.isArray(data[i])){
                 flatnerarray.push(data[i]);
            }else{
                a(data[i]);
            }
        }

    }
    a(data);
    console.log("result is ",flatnerarray);
    
    return(
        <div>
            <h1>Array flattner</h1>
        </div>
    )
};



export default Code185;

