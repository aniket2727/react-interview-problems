

// code is written by aniket kadam


const Code6=()=>{

    const counters=()=>{
          let count=0;

           const inner=()=>{
            count=count+1
            return count
          }

          return inner;

    }


    const obj=counters();
    console.log(obj());
    console.log(obj());
    console.log(obj());   

    
    return(
        <div>
          <h1>Closure</h1>
        </div>
    )
};

export default Code6;