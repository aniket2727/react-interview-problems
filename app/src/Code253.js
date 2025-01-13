import React, { useState, useRef } from "react";

const OTPComponent = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Array to store OTP digits
  const inputRefs = useRef([]); // Ref to store references to the input fields
  console.log("refs",inputRefs);
  console.log(otp)

  // Handle input change for each field
  const handleChange = (e, index) => {
    const value = e.target.value;

    // If the value is not a number or it's more than 1 character, don't proceed
    if (!/^[0-9]{0,1}$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move to the next field if a digit is entered
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
      console.log("a",inputRefs.current[index + 1])
    }
  };

  // Handle backspace key for going to the previous field
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="otp-container">
      <h2>Enter OTP</h2>
      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1} // Limit each field to 1 character
            ref={(el) => (inputRefs.current[index] = el)} // Store ref for each input
            autoFocus={index === 0} // Focus on the first input initially
            className="otp-field"
          />
        ))}
      </div>
      <div>
        <p>Entered OTP: {otp.join("")}</p>
      </div>
    </div>
  );
};

export default OTPComponent;
