


// code is written by Aniket Kadam
import React from 'react';
import { useContext } from 'react';
import ThemeContext from './ThemeContext'; // Import the context properly

const Code146 = () => {
    const { setTheme, theme } = useContext(ThemeContext); // Using ThemeContext correctly

    return (
        <div style={{ backgroundColor: theme }}>
            <h1>Hello</h1>
            <button onClick={() => setTheme(theme === 'black' ? 'white' : 'black')}>
                Toggle Theme
            </button>
        </div>
    );
};

export default Code146;
