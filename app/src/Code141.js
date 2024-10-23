


//code is written by aniket kadam
//protoypes  if we creted object in javascript



import React from 'react'

const Code141=()=>{


    function Naming(name){
         this.name=name;
    }


    Naming.prototype.printname=function(){
         return `hello my name is ${this.name}`
    }


    const P1=new Naming('aniket');
    console.log(P1.printname());



    return(
        <div>
            <h1>prototype problems</h1>
        </div>
    )
};



export default Code141;