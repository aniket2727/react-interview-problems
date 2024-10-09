// Code written by Aniket Kadam
import React, { useContext, useEffect } from 'react';
import { NameContext } from './Code129';

const Code130 = () => {
    const { name, setName } = useContext(NameContext);

    // Use useEffect to set the name once when the component mounts
    useEffect(() => {
        setName('Aniket');
    }, [setName]);

    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Code130;
