// code is written by aniket kadam

import { useState } from "react";
import './print.css'; // Import the CSS file

const Printdatadisplay = () => {
    const [flag, setFlag] = useState(false);

    const handleDisplay = () => {
        setFlag(!flag);
    };

    return (
        <div className="container">
            {flag ? (
                <div className="popup fade-in">
                    <h1>Booked</h1>
                    <button className="close-btn" onClick={handleDisplay}>
                        Close
                    </button>
                </div>
            ) : (
                <div>
                    <h1>Print Blocks</h1>
                    <button className="display-btn" onClick={handleDisplay}>
                        Display
                    </button>
                </div>
            )}
        </div>
    );
};

export default Printdatadisplay;
