// Code is written by Aniket Kadam
// Form validations

import { useState } from "react";

const Formvalidations = () => {
    const [data, setData] = useState({ name: "", password: "" });
    const [error, setError] = useState({ name: false, password: false });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        
        let isValid = true;

        if (data.name === "" || data.name === undefined) {
            setError(prev => ({
                ...prev,
                name: true
            }));
            isValid = false;
        } else {
            setError(prev => ({
                ...prev,
                name: false
            }));
        }

        if (data.password === "" || data.password === undefined) {
            setError(prev => ({
                ...prev,
                password: true
            }));
            isValid = false;
        } else {
            setError(prev => ({
                ...prev,
                password: false
            }));
        }

        if (isValid) {
            console.log(data);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Name</label>
                <input
                    style={{borderColor:error.name?'red':'black'}}
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                />
                {error.name && <span style={{color:'red'}}>Please fill correct form</span>}

                <label>Enter Password</label>
                <input
                   style={{borderColor:error.password?'red':'black'}}
                    type="password"
                    placeholder="Enter password"
                    value={data.password}
                    name="password"
                    onChange={handleChange}
                />
                {error.password && <span style={{color:'red'}}>Please fill correct form</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Formvalidations;
