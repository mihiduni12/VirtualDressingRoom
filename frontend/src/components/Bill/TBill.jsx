import React, { useState } from "react";
import { Link } from "react-router-dom";

const Bill = ({ items }) => {
  // Calculate total amount
  const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckout = () => {
    if (selectedOption === null) {
      alert("Please select a payment method");
    } else {
      if (selectedOption === "card") {
        // Redirect to card payment page
        window.location.href = "/checkout/card";
      } else if (selectedOption === "slip") {
        // Redirect to slip payment page
        window.location.href = "/checkout/slip";
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg text-xl overflow-hidden">
      <div className="px-6 py-4">
        <div className="max-w-[2100px] w-full">
          <ul>
            {items.map((item, index) => (
              <li key={index} className="flex justify-between mb-1 text-xl">
                <span>{item.name}</span>
                <span>{item.amount}</span>
              </li>
            ))}
          </ul>
          <br></br>
        </div>
        {/* Total */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700 font-semibold text-3xl">Total</span>
          <span className="font-bold text-3xl">{totalAmount}</span>
        </div>
        {/* Checkout Dropdown */}
        <div className="flex justify-between items-center mb-4">
          <select
            className="bg-gray-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">Select Payment Method</option>
            <option value="card">Card</option>
            <option value="slip">Slip</option>
          </select>
        </div>
        {/* Checkout Button */}
        <div className="text-right">
          <button
            className="bg-[#44d658] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleCheckout}
          >
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bill;
