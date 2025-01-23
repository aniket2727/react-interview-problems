/* eslint-disable no-extend-native */



import React from 'react'

const Code271 = () => {


    const a=[1,2,3,4,5];

    Array.prototype.ff=function(callback){
        const result=[];
        for(let i=0;i<this.length;i++){
            result.push(callback(this[i],i,this))
        }
        return result;
    }
    const f=a.ff((item)=>{
        return item%2===0 ?item:'';
    });
    console.log("this is result",f);


  return (
    <div>
      
    </div>   
  )
}

export default Code271
