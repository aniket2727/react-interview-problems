



import React from 'react'

const CustomMap = () => {

    // eslint-disable-next-line no-extend-native
    Array.prototype.mymap=function(callback){
        // eslint-disable-next-line no-unused-vars
        const result=[];
        for(let i=0;i<this.length;i++){
            result.push(callback(this[i],i,this));
        }
        return result;
    }

    const a=[1,2,3,4,5];
    const aa=a.mymap((item)=>{
        return item*2;
    });

    console.log("the result is ",aa);


    const transformed = a.mymap((item, index, arr) => {
        console.log(`Element: ${item}, Index: ${index}, Array: ${arr}`);
        return item * 2;
      });
      
      console.log("tt",transformed);

  return (
    <div>
      
    </div>
  )
}

export default CustomMap
