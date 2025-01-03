import React from 'react'

const Code232 = () => {

   //closure code 

   function outer(name){
       const data="aniket kadam";
       return  function inner(){
           console.log("the inner functio is ",data);
           console.log("name is ",name);
       }
   }

   const obj=outer("sanket");
   obj();

  return (
    <div>
      <h1>code is running</h1>
    </div>
  )
}

export default Code232
