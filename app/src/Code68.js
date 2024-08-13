// code is written by aniket kadam
// table print code 

import { useState } from "react";

const PrintTable = () => {
    const [data, setData] = useState([
        { name: "Aniket", age: 10 },
        { name: "Vishal", age: 20 },
        { name: "Abhi", age: 30 }
    ]);

    return (
        <div>
            <h1>Code is for table</h1>
            <table style={{ width: "50%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{item.name}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PrintTable;
