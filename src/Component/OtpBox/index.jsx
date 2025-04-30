import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const OtpBox = () => {
  const [otp, setOtp] = useState(new Array(6).fill("")); // ['','','','','','']
  const inputRefs = useRef([]);

  // Handle single input change
  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, ""); // allow only digits
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if exists
    if (index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace (move to previous if empty)
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle full OTP paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d{6}$/.test(pasteData)) {
      const newOtp = pasteData.split("");
      setOtp(newOtp);
      newOtp.forEach((digit, idx) => {
        inputRefs.current[idx].value = digit;
      });
      inputRefs.current[5].focus();
    }
  };

  const handleSubmit = () => {
    const fullOtp = otp.join("");
    if (fullOtp.length < 6) {
      alert("Please enter all 6 digits");
    } else {
      alert("OTP Submitted: " + fullOtp);
      // You can send OTP to backend here
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center   p-4">
        <div className="flex gap-3 mb-4" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-lg border border-gray-400 rounded-md focus:outline-primary"
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
        <Link to="/Resetpassword">
          <button
            onClick={handleSubmit}
            className="bg-primary text-white px-6 py-2 rounded hover:bg-gray-700"
          >
            Submit OTP
          </button>
        </Link>
      </div>
    </>
  );
};

export default OtpBox;
