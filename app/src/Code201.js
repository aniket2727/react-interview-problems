//  code is written by aniket kadam
import React from 'react';
import { useState } from 'react';

const Code201 = () => {

    const [data, setdata] = useState([
        { name: 'aniket', age: 10 },
        { name: 'vijay', age: 20 },
        { name: 'kadam', age: 40 },
        { name: 'sanket', age: 100 }]);


        const[selected,setselected]=useState('');
        console.log("selcted ",selected)
    return (
        <div>
            <h1>selctions</h1>
            <h1>{selected}</h1>
            <div>
                <h1>Selections</h1>
                <select onChange={(e)=>setselected(e.target.value)}>
                    {data.map((item, index) =>
                        item.age > 20 ? (
                            <option style={{ backgroundColor: 'red' }} key={index}>
                                {item.name}
                            </option>
                        ) : null
                    )}
                </select>
            </div>
        </div>
    )
};



export default Code201;






