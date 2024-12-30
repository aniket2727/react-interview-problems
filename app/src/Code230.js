



import React, { useState } from "react";
import { EventEmitter } from "events";

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

const ParentComponent = () => {
  const [value, setValue] = useState("");

  // Listen for the event and update the state
  eventEmitter.on("updateValue", (newValue) => {
    setValue(newValue);
  });

  return (
    <div>
      <p>{value}</p>
      <ChildComponent />
    </div>
  );
};

const ChildComponent = () => {
  const handleClick = () => {
    // Emit the event to update the value
    eventEmitter.emit("updateValue", "New Value from Child");
  };

  return <button onClick={handleClick}>Update Value</button>;
};

export default ParentComponent;
