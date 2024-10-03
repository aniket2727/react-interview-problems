



import React, { useState } from 'react'

const Code115 = () => {
    const [data, setdata] = useState({ name: '', email: '' });

    const handledata = (e) => {
        const { name, value } = e.target;
        setdata((prev) => ({...prev,[name]:value}))
    }


    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("the value of data is ", data)

    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input value={data.name} name='name' onChange={handledata} />
                <input value={data.email} name='email' onChange={handledata} />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Code115
