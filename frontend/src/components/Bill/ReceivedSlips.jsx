import React, { useState } from "react";

const ReceivedSlips = () => {
  const [receivedSlips, setReceivedSlips] = useState([
    {
      id: 1,
      slipNumber: "SLP001",
      amount: 1000,
      sender: "John Doe",
      status: "Pending",
    },
    {
      id: 2,
      slipNumber: "SLP002",
      amount: 1500,
      sender: "Jane Smith",
      status: "Pending",
    },
    {
      id: 3,
      slipNumber: "SLP003",
      amount: 2000,
      sender: "Alice Johnson",
      status: "Pending",
    },
  ]);

  const acceptSlip = (id) => {
    setReceivedSlips((prevSlips) =>
      prevSlips.map((slip) =>
        slip.id === id ? { ...slip, status: "Accepted" } : slip
      )
    );
  };

  const rejectSlip = (id) => {
    setReceivedSlips((prevSlips) =>
      prevSlips.map((slip) =>
        slip.id === id ? { ...slip, status: "Rejected" } : slip
      )
    );
  };

  const viewSlip = (slip) => {
    // Implement logic to view slip details
    console.log("View slip details:", slip);
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-[1300px] w-full">
        {receivedSlips.map((slip) => (
          <div
            key={slip.id}
            className="bg-white rounded-lg shadow-md mb-4 p-4"
          >
            <div className="mb-2">
              <span className="text-gray-600 font-semibold">Slip Number: </span>
              <span>{slip.slipNumber}</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-600 font-semibold">Amount: </span>
              <span>${slip.amount}</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-600 font-semibold">Sender: </span>
              <span>{slip.sender}</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-600 font-semibold">Status: </span>
              <span>{slip.status}</span>
            </div>
            <button
              onClick={() => acceptSlip(slip.id)}
              className="bg-[#3350df] text-white font-bold py-2 px-4 rounded mr-2"
            >
              Accept
            </button>
            <button
              onClick={() => rejectSlip(slip.id)}
              className="bg-[#df3339] text-white font-bold py-2 px-4 rounded mr-2"
            >
              Reject
            </button>
            <button
              onClick={() => viewSlip(slip)}
              className="bg-[#3df5f5] text-white font-bold py-2 px-4 rounded"
            >
              View Slip
            </button>
          </div>  
        ))}
      </div>
    </div>
  );
};

export default ReceivedSlips;
    ;
