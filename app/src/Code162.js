


import React from 'react'

const Code162 = () => {


    function a(x){
        return function(y){
            return function(z){
                  return x+y+z;
            }
        }
    }


    const result=a(10)(20)(30);
    console.log(result);
  return (
    <div>
      <h1>curring</h1>
    </div>
  )
}

export default Code162
