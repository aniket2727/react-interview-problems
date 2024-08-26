/* eslint-disable default-case */

// Code is written by Aniket Kadam
// Code is about a switch statement

const SwitchStatement = () => {

    function handleSwitch(item) {
        switch(item) {
            case 1: 
                return 1;

            case 2: 
                return 2;

            case 3: 
                return 3;

            default: 
                return "wrong item";
        }
    }

    console.log(handleSwitch(2));

    return (
        <div>
           <h1>Switch Statement</h1>
        </div>
    );
};

export default SwitchStatement;
