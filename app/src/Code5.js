


// code is written by aniket kadam
// closure is function is defined in another function and inner function referances variable form outer funtions   used for making counters


const Code5=()=>{

    const outter=()=>{
        const data="my name is aniket";

        const inner=()=>{
            console.log(data);
        }


        return inner;
    }


    const obj=outter();
    obj();


    return(
        <div>
        </div>
    )
}


export default Code5;