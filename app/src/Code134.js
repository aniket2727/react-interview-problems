


import React from 'react'

const Code134 = () => {


    const original = {
        name: "Aniket",
        address: {
          city: "Mumbai",
          zip: "400001"
        }
      };


      const deepcopy=JSON.parse(JSON.stringify(original));
      deepcopy.address.city="pune";
      console.log(original.address.city);
  return (
    <div>
      
    </div>
  )
}

export default Code134
