


import React from 'react'

const Code150 = () => {

    const a={
        name:'aniket',
        age:'10',
        printdata:function(loverage,lover){
            console.log("the age is ",this.name,this.age);
            console.log("lover age",loverage)
            console.log("lover",lover);

        }
    };
    
    const obj=a;
    //console.log(obj.printdata());

    const b={
        name:'prabh',
        age:'20'
    }

    // console.log(a.printdata())
    // console.log(a.apply(b))
     a.printdata.call(b,"10","simmi");
     a.printdata.apply(b,["10","simmi"]);
     const bindfuntion=a.printdata.bind(b,"10","simmi");

     bindfuntion();

  return (
    <div>
      <h1>this is code 150</h1>
    </div>
  )
}

export default Code150
