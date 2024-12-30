import React, { useState } from "react";

const ParentComponent = () => {
  const [message, setMessage] = useState("");

  // Callback function passed to the child component
  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h1>Parent Message: {message}</h1>
      <ChildComponent changeMessage={handleMessageChange} />
    </div>
  );
};

const ChildComponent = ({ changeMessage }) => {
  return (
    <div>
      <button onClick={() => changeMessage("Hello from Child!")}>Change Message</button>
    </div>
  );
};

export default ParentComponent;
