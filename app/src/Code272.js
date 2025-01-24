


import React from 'react'

const ReducersCustome = () => {

    // Custom reduce implementation
// eslint-disable-next-line no-extend-native
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0]; // Set the initial accumulator value
    let startIndex = initialValue !== undefined ? 0 : 1; // If no initialValue, start from index 1
  
    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this); // Update the accumulator
    }
  
    return accumulator;
  };
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  
  // Custom sum using myReduce
  const sum = numbers.myReduce((acc, num) => acc + num, 0);
  console.log('Sum:', sum); // Output: 15
  
  // Custom product using myReduce
  const product = numbers.myReduce((acc, num) => acc * num, 1);
  console.log('Product:', product); // Output: 120
  
  // Custom flattening using myReduce
  const nestedArray = [[1, 2], [3, 4], [5]];
  const flatArray = nestedArray.myReduce((acc, arr) => acc.concat(arr), []);
  console.log('Flattened Array:', flatArray); // Output: [1, 2, 3, 4, 5]
  
  return (
    <div>
      
    </div>
  )
}

export default ReducersCustome
