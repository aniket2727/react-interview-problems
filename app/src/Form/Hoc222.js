import React from 'react';

// Higher-Order Component (HOC)
const Hoc = (WrappedComponent) => {
    // HOC returns a new component
    return (props) => {
        // Add some custom logic or modifications to props if needed
        const additionalProps = { color: 'blue' };

        return (
            <div>
                {/* Wrapped component receives both its own props and any additional ones */}
                <WrappedComponent {...props} {...additionalProps} />
            </div>
        );
    };
};

// Wrapped Component
const Printdata = (props) => {
    return (
        <div>
            <h1 style={{ backgroundColor: props.color }}>This is a HOC example</h1>
        </div>
    );
};

// Applying the HOC to Printdata
const Resultofhoc = Hoc(Printdata);

// Main component
const Hoc222 = () => {
    return (
        <div>
            <Resultofhoc />
        </div>
    );
};

export default Hoc222;
