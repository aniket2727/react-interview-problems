import React, { useState } from "react";

const Code283 = () => {
    const [data, setData] = useState([]); // Store added entries
    const [formData, setFormData] = useState({
        productname: "",
        quantity: "",
        amount: "",
        price: "",
    });

    const handleInputChange = (event, index = null) => {
        const { name, value } = event.target;

        if (index !== null) {
            // Updating existing data (editing stored values)
            setData((prevData) =>
                prevData.map((item, i) =>
                    i === index ? { ...item, [name]: value, price: item.quantity * item.amount } : item
                )
            );
        } else {
            // Updating new form data
            setFormData((prev) => {
                const updatedData = { ...prev, [name]: value };
                if (updatedData.quantity && updatedData.amount) {
                    updatedData.price = Number(updatedData.quantity) * Number(updatedData.amount);
                }
                return updatedData;
            });
        }
    };

    const handleAdd = () => {
        setData((prev) => [...prev, formData]); // Store formData in data array
        setFormData({ productname: "", quantity: "", amount: "", price: "" }); // Reset form
    };

    return (
        <div>
            <h1>Append Projects</h1>

            <h2>Stored Data:</h2>
            {data.map((item, index) => (
                <div key={index} style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                    <p>Product Name</p>
                    <input
                        name="productname"
                        value={item.productname}
                        onChange={(e) => handleInputChange(e, index)}
                    />
                    <p>Quantity</p>
                    <input
                        name="quantity"
                        value={item.quantity}
                        onChange={(e) => handleInputChange(e, index)}
                    />
                    <p>Amount</p>
                    <input
                        name="amount"
                        value={item.amount}
                        onChange={(e) => handleInputChange(e, index)}
                    />
                    <p>Price: {item.price}</p>
                </div>
            ))}

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <p>Product Name</p>
                <input
                    name="productname"
                    value={formData.productname}
                    onChange={handleInputChange}
                />
                <p>Quantity</p>
                <input
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                />
                <p>Amount</p>
                <input
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                />
                <p>Price: {formData.price}</p>

                <button onClick={handleAdd}>+</button>
            </div>
        </div>
    );
};

export default Code283;
