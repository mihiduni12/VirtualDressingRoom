import React from 'react';

const TimeSelector = () => {
  return (
    <div className="max-w-md  bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Select Time</h2>
      <div className="flex justify-between">
        <div className="w-1/2 pr-2">
          <label htmlFor="startTime" className="block text-gray-700 font-semibold mb-2">Start Time</label>
          <select id="startTime" className="block w-full bg-gray-100 border border-gray-300 rounded p-2 focus:outline-none focus:bg-white">
            {/* Option items */}
            <option value="8:00 AM">8:00 AM</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="w-1/2 pl-2">
          <label htmlFor="endTime" className="block text-gray-700 font-semibold mb-2">End Time</label>
          <select id="endTime" className="block w-full bg-gray-100 border border-gray-300 rounded p-2 focus:outline-none focus:bg-white">
            {/* Option items */}
            <option value="5:00 PM">5:00 PM</option>
            <option value="6:00 PM">6:00 PM</option>
            <option value="7:00 PM">7:00 PM</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      {/* Checkout Button */}
      <div className="mt-4 text-right">
        <button className="bg-[#eb3d12] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default TimeSelector;