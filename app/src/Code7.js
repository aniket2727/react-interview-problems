
// code is written by anket kadam
// referance how varables are accesss primitive and refeance type
//primitive  unmutable numbers string float
// referance mutavle object array


const Code7=()=>{

    let a=10;
    let b=a;
    b=20;

    console.log(`the value of a ${a} and the value of b is ${b}`)

   let obj={name:"aniket",age:10};
   let obj2=obj;
    obj2.name="om"

    console.log(obj.name)
    return(
        <div>
           <h1>referances</h1>
        </div>
    )
};


export default Code7;

