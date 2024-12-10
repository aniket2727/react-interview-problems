// closure 




import React from 'react'

const Code216 = () => {

   function add(){

    const  a="aniket";
      function printdata(){
              console.log("this is aniket kadam",a);
      }

      return printdata;
   }


   const obj=add();
   obj();
  return (
    <div>
      <h1>printdata</h1>
    </div>
  )
}

export default Code216




