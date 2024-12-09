// 
import React from 'react';
import { useState } from 'react';


const Code214 = () => {
    const [flag, setflag] = useState(false);
    const [cflag, setcflag] = useState(false)

    const handleopen = () => {
        setflag(prev => !prev);
    }

    const handlecflag = () => {
         setcflag(true);
         setflag(false);
    }

    if (flag) {
        return (
            <div>
                <h1>you want to buy</h1>
                <button onClick={() => handlecflag()}>confirm buy</button>
                <button onClick={() => handleopen()}>close</button>
            </div>
        )
    }
    return (
        <div>
            <h1>{cflag ? 'tank you' : 'buy this'}</h1>
             {!cflag? <button onClick={() => handleopen()}>open</button>:null}
        </div>
    )
};


export default Code214;