import React from "react";

const Bill = ({ items }) => {
  // Calculate total amount
  const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);

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
        {/* Checkout Button */}
        <div className="text-right">
            <br></br>
          <button
            className="bg-[#44d658] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => alert("Proceed to checkout")}
          >
            Go to Checkout
          </button>

        </div>
      </div>
    </div>
  );
};

export default Bill;
