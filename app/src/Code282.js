import React from 'react'

const Code282 = () => {

    let data=10;

    const a=()=>{
        data=20;
       function printdata(){
        console.log("the data is",data)
        data=30
       }

       printdata()
    }

    a();
    
  return (
    <div>
      
    </div>
  )
}

export default Code282
