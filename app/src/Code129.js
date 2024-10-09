// Code written by Aniket Kadam
import React, { useState, createContext } from 'react';

// Create context
const NameContext = createContext();

const Contextforname = ({ children }) => {
    const [name, setName] = useState('');

    return (
        <NameContext.Provider value={{ name, setName }}> 
            {children}
        </NameContext.Provider>
    );
};

export default Contextforname;
