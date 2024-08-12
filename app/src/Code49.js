

// code is written by aniket kadam
// remove the white spaces from string

const Removewhitespaces=()=>{
    const a="  my name       is aniket kadam "

    let new1=a.split(' ');
    console.log("the new string is ",new1)
    const result=[]
    
    for(let i of new1){
        if(i!==''){
           result.push(i)
        }
    }

    console.log("the final result is",result.join(' '))
    return(
        <div>
           remove white spaces
        </div>
    )
};

export default Removewhitespaces;