// code is written by Aniket Kadam

import React, { useEffect, useRef } from 'react';

const Code80 = () => {
    const divRef = useRef(null); // Create a ref

    useEffect(() => {
        if (divRef.current) {
            console.log(divRef.current.dataset.userId); // Output: 123
            console.log(divRef.current.dataset.role);   // Output: admin
        }
    }, []);

    return (
        <div>
            <div ref={divRef} data-user-id="123" data-role="admin">Aniket Kadam</div>
        </div>
    );
}

export default Code80;
