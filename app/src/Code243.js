
// object in javascript

import React from 'react'

const Code243 = () => {


    const data={
        name:"aniket",
        fn:function(){
            const name="sanket"
            console.log("the value of name is ",this.name);
            console.log("the value of name is ",name)
        }
    };
    const obj=data;
    console.log(obj.name);
    console.log(obj.fn());

    const second={
        name:"kadam",
        fun:data.fn
    }

    second.fun();
  return (
    <div>
      <h1>Code243</h1>
    </div>
  )
}

export default Code243


