// Code is written by Aniket Kadam

import { useState } from "react";

const CurrencyConvert = () => {
    const [result, setResult] = useState(null);
    const [firstOption, setFirstOption] = useState('usd');
    const [secondOption, setSecondOption] = useState('eur');
    const [inputData, setInputData] = useState(0);

    const data = {
        usd: {
            eur: 0.85,
            gbp: 0.75,
            inr: 74.93
        },
        eur: {
            usd: 1.18,
            gbp: 0.88,
            inr: 88.31
        },
        gbp: {
            eur: 1.14,
            usd: 1.34,
            inr: 100.35
        },
        inr: {
            usd: 0.013,
            gbp: 0.0099,
            eur: 0.011
        }
    };

    const handleConverter = () => {
        console.log("The value of first option is:", firstOption);
        console.log("The value of second option is:", secondOption);
        console.log("The input value is:", inputData);
        
        try {
            const conversionRate = data[firstOption][secondOption];
            const convertedResult = conversionRate * parseFloat(inputData);
            setResult(convertedResult.toFixed(2));
        } catch (error) {
            console.log("The error is:", error);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderColor: 'red', border: '1px solid' }}>
            <h1>Currency Converter</h1>

            <input
                style={{ marginTop: '10px' }}
                placeholder="Enter amount"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
            />

            <h1>Select options for conversion</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderColor: 'black', border: '1px solid' }}>
                <select style={{ marginRight: '10px' }} value={firstOption} onChange={(e) => setFirstOption(e.target.value)}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                    <option value="inr">INR</option>
                </select>

                <select style={{ marginRight: '10px' }} value={secondOption} onChange={(e) => setSecondOption(e.target.value)}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                    <option value="inr">INR</option>
                </select>
            </div>

            <button onClick={handleConverter} style={{ marginTop: '10px', backgroundColor: 'green' }}>Convert</button>

            {result && <h1 style={{ color: 'red', marginTop: '10px' }}>The result is {result} {secondOption.toUpperCase()}</h1>}
        </div>
    );
};

export default CurrencyConvert;
