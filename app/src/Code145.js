// code is written by Aniket Kadam
import React, { useState, createContext } from 'react';

// Create the context
const ThemeContext = createContext();

// Create the provider component
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('black'); // Initialize theme state

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };
