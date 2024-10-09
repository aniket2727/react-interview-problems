


import React from 'react'

const Code133 = () => {
    // Using Object.assign for shallow copy
const original = {
    name: "Aniket",
    address: {
      city: "Mumbai",
      zip: "400001"
    }
  };
  
  const shallowCopy = Object.assign({}, original);
  shallowCopy.name = "Kadam";  // Only changes shallow property
  shallowCopy.address.city = "Pune";  // Changes inner object property
  
  console.log(original.name);  // Output: "Aniket" (original is unchanged)
  console.log(original.address.city);  // Output: "Pune" (nested object is affected)
  
  return (
    <div>
         <h1>deep copy</h1>
    </div>
  )
}

export default Code133
