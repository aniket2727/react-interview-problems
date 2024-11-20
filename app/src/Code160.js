


import React from 'react'

const Code160 = () => {
    // Function with a callback
function doTask(taskName, callback) {
    console.log(`Starting ${taskName}...`);
    setTimeout(() => { // Simulates a delay (like waiting for pizza)
        console.log(`${taskName} is done.`);
        callback(); // Call the callback function
    }, 2000); // 2 seconds delay
}

// Use the function
doTask("Task 1", () => {
    console.log("Callback called! Task 1 completed.");
});

  return (
    <div>
      
    </div>
  )
}

export default Code160
