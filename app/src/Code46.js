// Code is written by Aniket Kadam
// List Transfer
// Total Time: The total time added is the duration of the last setTimeout after the last button click.
// In this scenario, it’s 1 second. The previous timeouts are cleared and do not contribute to additional delays.

import { useState } from "react";

const ListTransfer = () => {
    const [leftData, setLeftData] = useState(["car", "bike", "apple", "king"]);
    const [rightData, setRightData] = useState([]);
    const [timeoutid,settimeoutid]=useState(null);

    const handleLeft = () => {
        // debouncers
        if(timeoutid){
            clearTimeout(timeoutid)
        }
       const id=setTimeout(()=>{
        if (leftData.length > 0) {
            const element = leftData[leftData.length - 1];
            setLeftData(leftData.slice(0, -1)); // Remove the last item
            setRightData([...rightData, element]); // Add it to the rightData
        }
       },1000)
       settimeoutid(id);
    };

    const handleRight = () => {

        //debouncers
        if(timeoutid){
            clearTimeout(timeoutid)
        }
        const id=setTimeout(()=>{
            if (rightData.length > 0) {
                const element = rightData[rightData.length - 1];
                setRightData(rightData.slice(0, -1)); // Remove the last item
                setLeftData([...leftData, element]); // Add it to the leftData
            }
        },1000)

        settimeoutid(id);
    };

    return (
        <div>
            <h1>List Transfer</h1>
            <div style={{ display: 'flex', width: '80%', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '400px', height: '300px', border: '1px solid red', overflowY: 'auto', padding: '10px' }}>
                    <h2>Left List</h2>
                    {leftData.map((item, index) => (
                        <div key={index}>
                            <h3>{item}</h3>
                        </div>
                    ))}
                </div>
                <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <button onClick={handleLeft} style={{ marginBottom: '10px' }}>Move to Right</button>
                    <button onClick={handleRight}>Move to Left</button>
                </div>
                <div style={{ width: '400px', height: '300px', border: '1px solid red', overflowY: 'auto', padding: '10px' }}>
                    <h2>Right List</h2>
                    {rightData.map((item, index) => (
                        <div key={index}>
                            <h3>{item}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListTransfer;
