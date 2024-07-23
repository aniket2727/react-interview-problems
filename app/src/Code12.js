/* eslint-disable no-extend-native */


// code is written by aniket kadam
//array protoypes


const Prototype=()=>{
    const handleprototype=()=>{
        Array.prototype.findEvens = function() {
            return this.filter(function(number) {
                return number % 2 === 0;
            });
        };
        const a=[1,2,3,4,5,6,7,8];
        const result=a.findevens();
        console.log(result)

    }
    handleprototype();
    return(
        <h1>Array prototype</h1>
    )

}

export default Prototype;