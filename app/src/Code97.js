
// code is written by aniket kaddam

import React from 'react'

const Code97 = () => {
    
const asyncOperation = () => {
    return new Promise((resolve, reject) => {
        // Simulate async task
        setTimeout(() => {
            const success = true; // Simulate success/failure
            if (success) {
                resolve('Operation successful');
            } else {
                reject('Operation failed');
            }
        }, 1000);
    });

    return "good morning";
};

asyncOperation()
    .then(result => console.log(result))
    .catch(error => console.error(error));

  return (
    <div>
      
    </div>
  )
}

export default Code97
