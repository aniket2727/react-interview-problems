




// In your code, you are demonstrating three ways of copying an object in JavaScript. Here’s an explanation of which is a shallow copy and which is a deep copy:

// 1. const copy = data;
// Type: Reference Copy
// Explanation:
// This does not create a new copy of the object. Instead, copy points to the same memory location as data.
// Any changes made to copy will directly affect data because both are referencing the same object.
//Not a copy at all, just a reference assignment.

import React from 'react'
import { json } from 'react-router-dom';

const Code163 = () => {


    const data={
        name:"aniket",
        age:"10"
    }
    

   // type of this copy
   // this is not copy its reference
    const copy=data;

    console.log("original",data)
    console.log(copy)
     
    // shallow copy
    const copy2={...data};
    console.log(copy2)



    // deep copy
    const copy3=JSON.parse(JSON.stringify(data));
     console.log(copy3);

     copy2.age="40";
     console.log(copy2)


  return (
    <div>
      <h1>copy   </h1>
    </div>
  )
}

export default Code163






