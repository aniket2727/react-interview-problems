
import React from 'react'

const Code161 = () => {

    function a(x){
        const data="aniket";

        function b(y){
            console.log("the value of data is ",data);
            console.log(x+y);
        }

        return b;
    }

    const obj=a(10);
    console.log(obj(10))
  return (
    <div>
      <h1>this is 161</h1>
    </div>
  )
}

export default Code161



