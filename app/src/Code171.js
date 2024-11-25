
// remove duplicates


import React from 'react'

const Code171 = () => {
  const data=[1,2,3,4,5,6,7,8,1,2,3,4];
  const count={};
  for(let i=0;i<data.length-1;i++){
    if(count[data[i]]){
      data.splice(i,1);  
    }
    else{
        count[data[i]]=1
    }
  }
  console.log(data);
  return (
    <div>
      
    </div>
  )
}

export default Code171
