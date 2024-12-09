// faq
import React from 'react';
import { useState } from 'react';


const Code213 = () => {

    const [data, setdata] = useState([
        {
            question: 'a',
            answer: 'b',
            state: false
        }, {
            question: 'c',
            answer: 'd', state: false
        }, {
            question: 'e',
            answer: 'f', state: false
        }
    ]);

    const handleClick = (index1) => {
               setdata((prev)=>prev.map((item,index)=>(
                   index===index1?{...item,state:!item.state}:item
               )))
    }
    return (
        <div>
            {
                data &&
                data.map((item, index) => (
                    <div key={index}>
                        <h1 onClick={()=>handleClick(index)}>{item.question}</h1>
                        {
                            item.state ?<div>{item.answer}</div>:null
                        }
                    </div>
                ))
            }
        </div>
    )
};

export default Code213;
