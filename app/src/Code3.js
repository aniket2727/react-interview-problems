

// code is written by aniket kadam
//forward ref demonstrate  basic
// use for pass useref from parent to child

import React, { forwardRef, useRef } from 'react';

// Child component using forwardRef
const Input = forwardRef((props, ref) => (
    <input ref={ref} {...props} />
));

const Parent = () => {
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <Input ref={inputRef} placeholder="Type here..." />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
};

export default Parent;
