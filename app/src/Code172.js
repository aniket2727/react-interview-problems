
// repeating elemtnts in array
import React from 'react'

const Code172 = () => {

    const data=[1,2,3,1,2,3,5,6,4];
    const aa=[];
    const bb=[];
    for(let i=0;i<data.length-1;i++){
        if(!aa.includes(data[i])){
          bb.push(data[i]);
        }
        else{
            aa.push(data[i])
        }
    };
    console.log("data is",aa);
  return (
    <div>
      <h1>repeleting elements in array</h1>
    </div>
  )
}

export default Code172
