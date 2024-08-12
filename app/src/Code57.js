

// code is written by anike kadam
//longets words into the string




const Longerswors=()=>{

    let a="my name is aniket";
    const arr=a.split(' ');
    let longest='';
    let l=0;

    for(let i of arr){
        if(i.length>l){
            l=i.length;
            longest=i
        }
    }
    
    console.log(longest)
    return(
        <div>
            <h1>Longets words</h1>
        </div>
    )
}


export default Longerswors;