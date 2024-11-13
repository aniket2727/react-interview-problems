import React from 'react'

const Code155 = () => {
    // A simple curried function
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const multiplyBy2 = multiply(2);  // First argument is provided
console.log(multiplyBy2(5));  // Logs: 10 (2 * 5)

const multiplyBy3 = multiply(3);  // First argument is provided
console.log(multiplyBy3(5));  // Logs: 15 (3 * 5)

  return (
    <div>
      
    </div>
  )
}

export default Code155
