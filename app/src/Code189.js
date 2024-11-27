/* eslint-disable no-extend-native */

// custom map

import React from 'react';

const  Code189=()=>{


    Array.prototype.add=function(){
         let sum=0
         for(let i=0;i<this.length;i++){
              sum=sum+this[i];
         }
         return sum;
    };

    const a=[1,2,3,4,5,6];
    console.log(a.add())
    return(
        <div>
             <h1>custo map</h1>
        </div>
    )
};



export  default Code189;














