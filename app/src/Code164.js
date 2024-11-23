
//promises

import React from 'react'

const Code164 = () => {


    const a=new Promise((resolve,reject)=>{
        
        const data=false;
        
        if(data){
            resolve("data is resolved")
        }
        else{
            reject("data is rejetced")
        }

    });



    a.then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log("the error is ",error);
    })
  return (
    <div>
      
    </div>
  )
}

export default Code164
