

// higher order funtctions
//funtions takes argument as another funtions and return functions


import React from 'react'

const Code235 = () => {
  
  function printdata(name){
    return function(age){
        console.log("the name is ",name,"age is ",age);
    }
  }

  const obj=printdata("aniket");
  console.log(obj("10"))
  return (
    <div>
           <h1>higher order funtions</h1>
    </div>
  )
}

export default Code235


