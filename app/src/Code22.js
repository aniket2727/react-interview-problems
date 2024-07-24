

// code is written by aniket kadam
import React, { useState } from "react";

const ParentComponent = () => {
  const [message, setMessage] = useState("");

  // Callback function to handle data from child
  const handleDataFromChild = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h1>Message from Child: {message}</h1>
      <Child sendDataToParent={handleDataFromChild} />
    </div>
  );
};



const Child = ({ sendDataToParent }) => {
  const sendMessage = () => {
    // Sending data to parent component
    sendDataToParent("Hello from Child!");
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Data to Parent</button>
    </div>
  );
};




export default ParentComponent;
