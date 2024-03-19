import React from 'react';

const ServicePayment = ({ appointment, onCancel }) => {
  return (
    <div className="bg-green-100 p-6 rounded-lg shadow-md mb-8 flex flex-col items-center">
      <h4 className="text-3xl font-mono antialiased text-gray-800 mb-2 font-weight: 700 line-height: 2rem">
      CeylonVibes Payments
      </h4>
      <br></br>
      <br></br>
      <p className="text-center">
        If the appointment is confirmed click the below button for the payment
      </p>
      <br></br>
      <button className="bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-4 rounded transition duration-200">
        Payment</button>
        <br></br>
        <br></br>
      <p className="text-center">
        If you want to cancel the appointment, do it before the payment, because
        the payment is non-refundable
      </p>
      <br></br>
      <button onClick={onCancel}  className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200">
        Cancel Appointment</button>
    </div>
  );
};

export default ServicePayment;