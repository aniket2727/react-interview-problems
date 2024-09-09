

//code is written by aniket kadam
// some javascript in react



import React, { useRef } from 'react';

const MyComponent = () => {
  // Create a ref to store the DOM element
  const divRef = useRef(null);

  // Function to log the div's content
  const handleClick = () => {
    if (divRef.current) {
      console.log('Div content:', divRef.current.textContent);
      // You can also manipulate the div's content here
      divRef.current.style.backgroundColor = 'lightblue';
    }
  };

  return (
    <div>
      <div ref={divRef} style={{ padding: '20px', border: '1px solid black' }}>
        This is the div content.
      </div>
      <button onClick={handleClick}>Log Div Content</button>
    </div>
  );
};

export default MyComponent;
