// code is written by aniket kadam
// simple geberators

const Genarators=()=>{
    function *number(){
        yield 1;
        yield 2;
        yield 3;     
    }

    const numGen=number();
    console.log(numGen.next().value);
    console.log(numGen.next().value);


    function *counter(){
        let count=0;
        while(true){
            count+=yield count
        }
    }

    const cout=counter();
    console.log(cout.next(3).value)
    console.log(cout.next(6).value)

    return(
        <div>
          <h1>generators</h1>
        </div>
    )
}


export default Genarators;