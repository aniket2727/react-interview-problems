



import React from 'react'
import {useState}  from 'react'

const Code261 = () => {
  
    const[data,setdata]=useState([
        {name:'aniket',age:"10",roll:"10"},
        {name:'aniket',age:"10",roll:"20"},
        {name:'aniket',age:"10",roll:"30"}]);

    const resp=data.map((item,index)=>{
        return {age:item.age,roll:item.roll}
    });
    
    console.log("the answer is ",resp)
    console.log(Array.isArray(resp));

    // resp.forEach((item)=>{
    //     console.log("this is age ",item.age);
    // })


    // for(let i=0;i<resp.length;i++){
    //     console.log(resp[i].age)
    // }
    
    // resp.map((item)=>{
    //    return  console.log(item.age);
    // });

      // Use forEach for logging
    resp.forEach((item) => {
        console.log("This is age: ", item.roll);
    });

  return (
    <div>
      
    </div>
  )
}

export default Code261
