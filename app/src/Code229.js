import React, { useState } from "react";

// HOC to inject the callback into a component
const withCallback = (WrappedComponent) => {
  return (props) => {
    const [value, setValue] = useState("");

    const updateValue = (newValue) => {
      setValue(newValue);
    };

    return <WrappedComponent value={value} updateValue={updateValue} {...props} />;
  };
};

const ChildComponent = ({ value, updateValue }) => (
  <div>
    <p>{value}</p>
    <button onClick={() => updateValue("New Value")}>Update Value</button>
  </div>
);

export default withCallback(ChildComponent);
