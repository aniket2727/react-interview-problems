


// code is written by aniket kadam

import { useEffect, useState } from "react";


const Code118 = () => {

    const [data, setdata] = useState([]);
    const [name, setname] = useState('');
    const [email, setemail] = useState('');



    const handlesubmit = () => {
        console.log("handle submit button is clicked")
        setdata((prev) => ([...prev, { name, email }]))

    }

    useEffect(() => {
        console.log(data)
        console.log("the type of data", typeof data);
        console.log(Array.isArray(data));
    }, [data])


    
    return (
        <div>
            <h1>Input data</h1>
            <input value={name} onChange={(e) => setname(e.target.value)} />
            <input value={email} onChange={(e) => setemail(e.target.value)} />
            <button onClick={() => handlesubmit()}>add</button>

        </div>
    )
};



export default Code118;