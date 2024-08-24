



// Code is written by Aniket Kadam
// Example of a Higher-Order Component (HOC) in React

import React from 'react';

// Higher-Order Component that adds additional behavior to a wrapped component
function withLogger(WrappedComponent) {
    return function EnhancedComponent(props) {
        // Log when the component is rendered
        console.log('Component rendered with props:', props);

        // Return the wrapped component with the original props
        return <WrappedComponent {...props} />;
    };
}

// Example of a simple component that we want to enhance
function SimpleComponent({ message }) {
    return <div>{message}</div>;
}

// Enhance SimpleComponent with logging functionality
const EnhancedSimpleComponent = withLogger(SimpleComponent);

const Code88 = () => {
    return (
        <div>
            <h1>Higher-Order Component (HOC) Example</h1>
            {/* Use the enhanced component */}
            <EnhancedSimpleComponent message="Hello from the enhanced component!" />
        </div>
    );
}

export default Code88;
