import React, { useEffect, useState } from 'react';
import './Code252.css';


//slice created the new array

const Code252 = () => {
    const [noti, setnoti] = useState([]);

    const handlesetnoti = (status, message) => {
        setnoti((prev) => {
            let currentTime = new Date().toISOString();
            return [...prev, { notystatus: status, notymessage: message, id: currentTime }];
        });
    };

    useEffect(() => {
        if (noti.length > 0) {
            const timeout = setTimeout(() => {
                setnoti((prev) => prev.slice(1)); // Remove the first notification
            }, 3000);

            return () => clearTimeout(timeout); // Cleanup timeout
        }
    }, [noti]); // This effect now only runs when there are notifications

    const handleDelete = (idget) => {
        setnoti((prev) => {
            return prev.filter((item) => item.id !== idget); // Corrected to use filter
        });
    };

    useEffect(() => {
        console.log("this is nofty", noti); // Only logs when `noti` state changes
    }, [noti]);

    return (
        <div className="page">
            {noti.length > 0 &&
                noti.map((item, index) => (
                    <div
                        className="nofyfications"
                        style={{
                            top: `${10 + index * 60}px`, // Stack notifications dynamically
                        }}
                        key={item.id}
                    >
                        <h1 style={{ backgroundColor: item.notystatus === 'error' ? 'red' : 'green' }}>
                            {item.notymessage}{' '}
                            <span onClick={() => handleDelete(item.id)} className="sp">
                                delete
                            </span>
                        </h1>
                    </div>
                ))}
            <button onClick={() => handlesetnoti('success', 'You did it successfully')}>success</button>
            <button onClick={() => handlesetnoti('error', 'An error occurred')}>error</button>
        </div>
    );
};

export default Code252;
