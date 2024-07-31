// Code is written by Aniket Kadam
// Form validations

import { useEffect, useState, useRef } from "react";

const Formvalidations = () => {
    const [data, setData] = useState({ name: "", password: "" });
    const [error, setError] = useState({ name: false, password: false });
    
    const userRefInput = useRef();

    useEffect(() => {
        userRefInput.current.focus();
    }, []);
    
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

        if (data.name === "") {
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

        if (data.password === "") {
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
            // proceed with form submission or API call
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="name">Enter Name</label>
                    <input
                        id="name"
                        ref={userRefInput}
                        style={{
                            borderColor: error.name ? 'red' : 'black',
                            borderWidth: '1px',
                            padding: '8px',
                            width: '100%'
                        }}
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                    {error.name && <span style={{ color: 'red' }}>Please fill in the correct form</span>}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="password">Enter Password</label>
                    <input
                        id="password"
                        style={{
                            borderColor: error.password ? 'red' : 'black',
                            borderWidth: '1px',
                            padding: '8px',
                            width: '100%'
                        }}
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                    />
                    {error.password && <span style={{ color: 'red' }}>Please fill in the correct form</span>}
                </div>

                <button type="submit" style={{ padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px' }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Formvalidations;
