// code is written by Aniket Kadam

import React, { useMemo } from 'react';

const Returndata = () => {
    // here some operations with higher complexity
    return "aniket kadam";
}

const Avoidchildrender = React.memo(() => {

    // Memoize the result of Returndata
    const result = useMemo(() => Returndata(), []);
    console.log(result);

    const handlebutton = () => {
        console.log("handle button got clicked");
    }

    return (
        <div>
            <button onClick={handlebutton}>click me</button>
        </div>
    )
});

export default Avoidchildrender;
