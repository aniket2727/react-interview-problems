


// code is written by aniket kadam
// print the pyramid of stars without using repeat

import React from 'react'

const Code70 = () => {
    const PrintPyramid = (rows) => {
        for (let i = 1; i <= rows; i++) {
            let line = '';
    
            // Add spaces before the stars
            for (let j = 0; j < rows - i; j++) {
                line += ' ';
            }
    
            // Add stars for the current row
            for (let k = 0; k < 2 * i - 1; k++) {
                line += '*';
            }
    
            console.log(line);
        }
    };
    
    PrintPyramid(5);
    
  return (
    <div>
      
    </div>
  )
}

export default Code70
