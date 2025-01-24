



import React from 'react'

const Code273 = () => {

    const useState = (initialValue) => {
        let state = initialValue;


        const setState = (newState) => {
            state = newState;
            console.log(`State updated to:`, state);
        }


        return [() => state, setState]

    }

    const [getCount, setCount] = useState(0);
    console.log(getCount()); // Call getter, prints: 0
    setCount(1); // Update state to 1
    console.log(getCount()); // Call getter again, prints: 1

    return (
        <div>

        </div>
    )
}

export default Code273
