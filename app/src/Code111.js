


// code is written by aniket kadam


const Promisesundersyanding=()=>{

    async function handlepromises(){
        return new Promise(async(resolve,reject)=>{
            const responce= await fetch('//dummyjson.com/test');

            if(responce){
                const result=await responce.json();
                resolve(result);
            }
            else{
                reject('error in fetching data')
            }
        })

    }

    handlepromises().then((data)=>{
        console.log("the result is ",data)
    });
    return(
        <h1>promises undestanding</h1>
    )
};

export default Promisesundersyanding;