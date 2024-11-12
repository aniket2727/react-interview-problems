

import React from 'react'
// it gives error for the arraow funtion
const Code152 = () => {
    var name="simmi"
    const person = {
        name: 'Aniket',
        greet: function() {
            console.log(this.name); // `this` does NOT refer to `person`, but to the global context
        }
    };
    person.greet(); // Logs `undefined` because `this` is inherited from outside `person`
    
  return (
    <div>
      
    </div>
  )
}

export default Code152
