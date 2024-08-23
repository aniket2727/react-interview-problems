// Code is written by Aniket Kadam
// DOM Manipulations
// On click of buttons, change inner HTML

import { useEffect } from 'react';

const Dom2 = () => {

    useEffect(() => {
        const changeEvent = document.getElementsByClassName('change');

        // Convert HTMLCollection to Array to iterate and add event listeners
        Array.from(changeEvent).forEach(item => {
            item.addEventListener('click', () => {
                item.innerHTML = "add code";
            });
        });
    }, []);

    return (
        <div>
            <h1>DOM Manipulations</h1>
            <button className="change">Change context</button>
        </div>
    )
};

export default Dom2;
