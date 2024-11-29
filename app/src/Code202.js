


import React from 'react';
import { useState } from 'react';



const Code202 = () => {


    const [data, setdata] = useState('');



    const handleChecked = (event) => {
        setdata(event.target.value);
    }



    return (
        <div>
            <h1>{data}</h1>
            <input type='radio' name='option1'  value="option1" onChange={handleChecked} checked={data === 'option1'} />
            <input type='radio' name='option2'  value="option2" onChange={handleChecked} checked={data === 'option2'} />
            <input type='radio' name='option3'  value="option3" onChange={handleChecked} checked={data === 'option3'} />
        </div>
    )
};

export default Code202;