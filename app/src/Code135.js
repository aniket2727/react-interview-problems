


import React from 'react'

const Code135 = () => {

    const person = {
        firstName: 'Aniket',
        lastName: 'Kadam',
        fullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    };
    
    const anotherPerson = {
        firstName: 'John',
        lastName: 'Doe'
    };
    
    // Using call to invoke fullName with anotherPerson as 'this'
    console.log(person.fullName.call(anotherPerson)); // Output: "John Doe"
    
  return (
    <div>
      
    </div>
  )
}

export default Code135
