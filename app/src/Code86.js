

// code is written by aniket kadam

// libraries like RxJS (Reactive Extensions for JavaScript), an Observable represents a data stream or an event source.
//  Observers subscribe to these Observables to receive updates.


// Code is written by Aniket Kadam
import React, { useEffect, useState } from 'react';

const WebSocketComponent = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Open a WebSocket connection
        const socket = new WebSocket('ws://example.com/socket');

        // Subscribe to incoming messages
        socket.onmessage = (event) => {
            const newMessage = event.data;
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        };

        // Handle errors (optional)
        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        // Clean up the subscription when the component unmounts
        return () => {
            socket.close();
        };
    }, []); // Empty dependency array ensures this effect runs only once (on mount and unmount)

    return (
        <div>
            <h2>WebSocket Messages</h2>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
};

export default WebSocketComponent;
