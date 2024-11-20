
import React from 'react'

const Code161 = () => {

    function a(){
        const data="aniket";

        function b(){
            console.log("the value of data is ",data)
        }

        return b();
    }

    const obj=a();
    console.log(obj)
  return (
    <div>
      <h1>this is 161</h1>
    </div>
  )
}

export default Code161



