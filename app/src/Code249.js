import React, { useEffect } from 'react';

const Code247 = () => {

  useEffect(() => {
    // Get all <h1> elements and log their text content
    const h1Elements = document.querySelectorAll('h1');
    console.log(h1Elements);
    const textContent = Array.from(h1Elements).map(h1 => h1.textContent);
    console.log(textContent); // Logs an array of text content from all <h1> tags
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div>
      <h1>Title 1</h1>
      <h1>Title 2</h1>
      <h1>Title 3</h1>
    </div>
  );
}

export default Code247;
